import acceptLanguage from 'accept-language-parser';
import { NextResponse, type NextRequest } from 'next/server';

// NOTE(hajae): 알아두면 좋은 점: 리디렉션의 경우, NextResponse.redirect 대신 Response.redirect를 사용할 수도 있습니다.

// export async function middleware(request: NextRequest) {
// const { pathname } = request.nextUrl;
// console.log('pathname: ', pathname);
/**
 * skipMiddlewareUrlNormalize: true 옵션을 사용하면 middleware에서 Next.js가 URL을 자동으로 "정규화(normalize)"하는 것을 피하고,
 * 원래의 URL을 그대로 사용할 수 있습니다. 이 설정을 통해 Next.js는 /page와 같은 단순 URL이 아니라, /app/layout.js와 같은 더 구체적인 내부 파일 경로를 pathname에 그대로 표시하게 됩니다.
 *
 * 정규화를 건너뛰면, 파일 경로가 그대로 표시되므로 페이지를 처음 방문할 때와 페이지 내에서 이동할 때 일관된 URL 정보가 전달됩니다.
 * 이렇게 되면 클라이언트 전환(페이지 내 링크 이동)과 서버 전환(새로고침 등) 상황을 동일하게 처리할 수 있어, URL이 정규화되지 않고 middleware에서 더 많은 제어가 가능합니다.
 *
 * 이럴때 사용되는 듯
 * 1. 정적 파일들의 실제 경로가 middleware에 전달되므로, 특정 파일 요청을 확인하거나 로깅
 * 2. 특정 파일 또는 경로에 대해 접근 권한을 제한하거나, 특정 파일 접근 시 사용자를 리디렉션할 수 있음
 * 3. 로그 수집 및 디버깅
 * 4. 클라이언트 내 전환 / URL을 직접 입력해서 새로 방문했을 때를 구분. 두 경우를 다르게 처리할 수 있어 더 다양한 사용자 경험을 제공
 *
 * 직접 로그 수집 디버깅에 사용해봐야 알 듯하다... 이런게 있다는 것만 알고가자
 *
 * 추가로 export const config의 matcher를 주석처리를 해야 표시됐음. matcher로 필터링이 되는 듯 함.
 *
 * ------------------------------------------------------------------------
 * skipMiddlewareUrlNormalize: true, 설정을 next.config.mjs에 설정하면
 *
 * pathname: /_next/acistt/css/app/layout.css;
 * pathname: /_next/acistt/chunks/webpack.js;
 * pathname: /_next/acistt/chunks/main-app.js;
 * pathname: /_next/acistt/chunks/app-pages-internals.js;
 * pathname: /_next/acistt/chunks/app/page.js;
 * pathname: /_next/acistt/chunks/app/layout.js;
 * pathname: /_next/acistt/chunks/app/global-error.js;
 */
//   return NextResponse.redirect(new URL('/', request.url));
// }

// export const config = {
//   matcher: '/about/:path*',
// };

const supportedLocales = ['en', 'ko'];

function getLocale(request: Request) {
  // NOTE(hajae): 헤더에 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' 이런값이 들어있음
  // 브라우저 선호 언어 설정에 따름
  const acceptLanguageHeader = request.headers.get('accept-language');
  if (!acceptLanguageHeader) return supportedLocales[0];

  // NOTE(hajae): accept-language-parser library 사용
  const clientLanguages = acceptLanguage.parse(acceptLanguageHeader);
  const matchedLocale = clientLanguages.find((lang) => {
    const localeCode = lang.code;
    return supportedLocales.includes(localeCode) || supportedLocales.includes(lang.code);
  });

  return matchedLocale ? matchedLocale.code : supportedLocales[0];
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|sitemap.xml|robots.txt|api/|test(?:$|/)|rendering(?:$|/)).*)'],
};

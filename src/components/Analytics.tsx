import Script from 'next/script';

/**
 * GA4 via GTM — só renderiza se as variáveis de ambiente estiverem preenchidas.
 * Em ambiente de desenvolvimento (NODE_ENV !== 'production'), não carrega.
 */
export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const awId = process.env.NEXT_PUBLIC_AW_CONVERSION_ID;

  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      {gtmId && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        </>
      )}

      {gaId && !gtmId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script
            id="gtag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});${awId ? `gtag('config','${awId}');` : ''}`,
            }}
          />
        </>
      )}
    </>
  );
}

export function AnalyticsNoscript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId || process.env.NODE_ENV !== 'production') return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

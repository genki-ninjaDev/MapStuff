import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Head from "next/head";

import FrontendLayout from "../../../components/layouts/FrontendLayout";
import HowToCreateAMap from "../../../components/guides/HowToCreateAMap";
import { getSession } from "next-auth/client";
import { useTranslation } from "react-i18next";
export default function Index({ host, session }) {
  const { t } = useTranslation();

  return (
    <div>
      <FrontendLayout>
        <Head>
          <title>{t("help_guides_support.how_to_create_map.page_title")}</title>
          <meta
            name="description"
            content="Click Create a map button. Fill in details in the Add Location form. Once all locations are added, set up your map settings."
          />
          <meta
            name="keywords"
            content="MapStuff, customized map, embed map, create map"
          />

          <meta itemProp="name" content="How to Create a Map | MapStuff.io" />
          <meta
            itemProp="description"
            content="Click Create a map button. Fill in details in the Add Location form. Once all locations are added, set up your map settings."
          />
          <meta
            itemProp="image"
            content="https://cdn.gangnam.club/images/logos/map-stuff-logo-rect-black.svg"
            alt="MapStuff.io logo"
          />

          <meta
            property="og:url"
            content="https://mapstuff.io/guides/how-to-create-a-map"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="How to Create a Map | MapStuff.io"
          />
          <meta
            property="og:description"
            content="Step-by-step guide on how to make your map."
          />
          <meta
            property="og:image"
            content="https://cdn.gangnam.club/images/logos/map-stuff-logo-rect-black.svg"
            alt="MapStuff.io logo"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="How to Create a Map | MapStuff.io"
          />
          <meta
            name="twitter:description"
            content="Step-by-step guide on how to make your map."
          />
          <meta
            name="twitter:image"
            content="https://cdn.gangnam.club/images/logos/map-stuff-logo-rect-black.svg"
            alt="MapStuff.io logo"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <HowToCreateAMap />
      </FrontendLayout>
    </div>
  );
}





export async function getServerSideProps(context) {
  const { req } = context;

  if (req) {
    let host = req.headers.host; // will give you localhost:3000

    return {
      props: { host },
    };
  }
}


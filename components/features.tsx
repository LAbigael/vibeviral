"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesBg2 from "@/public/images/features-bg2.png";
import FeaturesBg3 from "@/public/images/features-bg3.png";
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section id="services" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-bg-300 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-primary-100">Explorez nos solutions</h1>
            <p className="text-xl text-text-100">
              Renforcez votre présence en ligne avec nos services de gestion des
              médias sociaux. Nous intégrons des stratégies personnalisées pour
              engager de manière exceptionnelle vos clients
            </p>
          </div>
          <Feature
            title="Gestion des réseaux sociaux"
            image={FeaturesBg}
            description="
          Nous surveillons et améliorons activement votre image de marque en
          ligne, en gérant les retours clients et en répondant aux critiques de
          manière constructive pour renforcer la perception positive de votre
          entreprise sur les réseaux sociaux."
          />
          <Feature
            reversed
            title="Stratégie des Réseaux Sociaux"
            image={FeaturesBg2}
            description="
Nous élaborons une stratégie sur mesure pour les médias sociaux, en choisissant les plateformes adaptées et en définissant une ligne éditoriale pertinente, pour engager efficacement votre audience et accroître votre visibilité en ligne. "
          />
          <Feature
            title="Analyse et Reporting des Performances"
            image={FeaturesBg3}
            description="Grâce à des outils avancés, nous fournissons des analyses détaillées de vos campagnes sur les réseaux sociaux, permettant d'ajuster les stratégies en fonction des réactions des internautes pour optimiser les performances et le retour sur investissement."
          />

          {/* Section content */}
        </div>
      </div>
    </section>
  );
}
type FeatureTypes = {
  title: string;
  description: string;
  image: StaticImageData;
  reversed?: boolean;
};

function Feature({
  reversed,
  title,
  description,
  image,
}: FeatureTypes): JSX.Element {
  return (
    <div
      className={`flex flex-col-reverse ${
        reversed
          ? "lg:flex-row-reverse md:flex-row-reverse"
          : "lg:flex-row md:flex-row"
      } md:flex-row  md:max-w-none w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6`}
      data-aos="fade-right"
    >
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:w-1/2 md:pr-4 lg:pr-12 xl:pr-16 mb-8">
        <h4 className="h3 mb-3 text-primary-100">{title}</h4>
        <p className="text-xl text-text-200">{description}</p>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2m ax-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
        <div className="transition-all">
          <div
            className="relative flex flex-col text-center lg:text-right"
            data-aos="zoom-y-out"
          >
            <Transition
              appear={true}
              show={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterFrom="opacity-0 translate-y-16"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-16"
              unmount={false}
            >
              <div className="relative inline-flex flex-col">
                <Image
                  className="md:max-w-none mx-auto rounded"
                  src={image}
                  width={500}
                  height="462"
                  alt="Features bg"
                />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

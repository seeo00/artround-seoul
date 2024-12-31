'use client';

import React, { useEffect, useRef } from 'react';
import ActionBar from './ActionBar';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';
import IntroSwiper from '../overview/introSwiper';
import { infoList } from '../overview/page';
import DetailsSwiper from './detailsSwiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DetailsPage = () => {
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'bottom center',
        end: 'bottom 40%',
        scrub: true,
        //markers: true,
      },
      opacity: 0.3,
    });
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'bottom center',
        end: 'bottom 40%',
        scrub: true,
        //markers: true,
      },
      scale: 1.2,
    });
  }, []);

  return (
    <div className="relative">
      <div ref={triggerRef} className="w-full fixed top-0 left-0">
        <Image
          src="/images/pattern/thumb/overview-swiper-1.avif"
          alt=""
          width={1470}
          height={980}
          ref={imageRef}
          className="w-full h-[55svh] object-cover object-center brightness-[75%] relative"
        />
        <div ref={textRef} className="container absolute bottom-14 left-0">
          <div className="flex items-center">
            <span className="text-xs text-white font-medium">미디어아트</span>
            <span className="block h-[10px] w-[1px] bg-gray-300 mx-2"></span>
            <span className="text-xs text-white font-medium ">2024.00.00 ~ 2024.00.00</span>
          </div>
          <h2 className="text-3xl font-paperlogy font-bold !max-w-[80%] leading-tight text-white break-keep mt-3">
            당신의 경이로운 세계, 그리고 예술
          </h2>
          <p className="text-sm text-white font-medium mt-3">한국과 일본을 대표하는 예술가 5인의 특별전</p>
        </div>
      </div>
      <div className="py-[60px] flex flex-col gap-7 relative mt-[calc(55svh+1px)] bg-white">
        <div className="container leading-[1.75] text-[15px]">
          <p>권여현,심우현,지아 혁,노리 오카와,히로키 니이미 그룹전</p>
          <p>&nbsp;</p>
          <p>
            세계는 어떤 반복하는 운동을 보여주는 것 같다. 그 운동은 하나로 연결되어 연속 되기도 하고 혹은 뚝뚝
            끊어지기도 한다. 동시에 융합적이며 하나로 통합하는 힘과 반대로 예측 할 수 없는 방향으로 분열하고 파편화하는
            힘이 혼재되어있기도 하다. 누군가의 눈에는 그 운동, 그 흐름과 리듬이 좀 더 분명하게 보이는 것 같다. 질서를
            향하는 운동과 혼돈으로 나아가는 운동. 그러나 누구나 그것을 인지하는 것은 아니다. 그것을 보다 빨리 정확하게
            알아채는, 더 예민하거나 또는 특별한 재능과 안목을 가진 사람들이 있을 것이다. 무한히 커져가는 세계와 동시에
            무한히 줄어드는 세계의 경이로움. 화가의 그림은 언제나 강렬하면서도 치밀하게 구성되어있다. 개념과 표현이
            교묘하게 균형을 이룬다.
          </p>
          <p>&nbsp;</p>
          <p>
            여기 각자 살아가는 시간과 경험이 다른 5인의 예술가가 있다. 개인의 의식과 삶이 사실은 인류와 문명 전체와
            긴밀하게 연결되어 있다는 직관, 설명할 수 없이 강력한 생명력을 경험하는 감각, 자본과 상품으로 구성되는 일상과
            현실, 존재와 비존재 사이에서 치열하게 견디어내는 삶, 그리고 초월적 사유와 궁극의 해방감. 길고 긴 영겁의
            시간과 찰나의 시간, 우주의 끝만큼 먼 시간과 빈틈없이 가까운 시간.
          </p>
          <p>&nbsp;</p>
          <p>
            SH GALLERY의 2024년의 마지막 전시는 한·일 5인의 작가전으로 시대와 국경을 초월한 예술적 대화를 탐구하는
            장이다. 작가들은 개인과 사회, 삶과 죽음, 나와 세계, 예술과 자본 등 다양한 개념이 병치 되는 상황을 반영하는
            작업을 제시한다. 다양한 연령대의 작가들이 참여한 이번 전시는 각자의 삶과 철학을 색채와 형식을 통해
            독창적으로 표현한다. 강렬한 색감 속 직관적 미학과 무채색의 깊이 있는 메시지는 관람객에게 철학적 사유와
            감각적 경험을 동시에 선사한다.
          </p>
          <p>&nbsp;</p>
          <p>
            이번 전시는 단순히 작품들이 조화를 이루는 것을 넘어, 서로 다른 문화적 배경에서 창조된 예술이 하나의 공간에서
            융합되는 아름다움을 보여준다. 예술의 보편성과 개별성이 공존하는 이 전시는 예술이 인간의 감정과 사고를 초월해
            소통할 수 있음을 다시금 일깨운다. 2024년의 끝자락에서 이 전시가 관람객에게 예술의 직관적 아름다움과 철학적
            깊이를 동시에 전달할 수 있기를 바라며 다섯 작가의 작품이 펼치는 다채로운 세계 속에서 새로운 감각과 통찰을
            간접적으로 경험할 수 있다.
          </p>
        </div>
        <DetailsSwiper />
        <Container>
          <div className="bg-gray-100 p-5 rounded">
            <strong>편차의 편차</strong>
            <dl className="text-sm">
              {infoList.map(({ label, content }) => (
                <div key={label} className="flex gap-6 mt-2">
                  <dt className="font-bold flex-shrink-0">
                    <span>{label}</span>
                  </dt>
                  <dd>
                    {Array.isArray(content) ? content.map((item, index) => <div key={index}>{item}</div>) : content}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
        <Container>
          <div className="bg-gray-100 h-[200px] rounded"></div>
        </Container>
        <Container className="flex flex-wrap gap-3">
          <button className="text-sm font-medium bg-gray-100 px-3 py-2 rounded">#미술</button>
          <button className="text-sm font-medium bg-gray-100 px-3 py-2 rounded">#현대미술</button>
        </Container>
      </div>
      <ActionBar />
    </div>
  );
};

export default DetailsPage;

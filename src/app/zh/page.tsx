"use client"
import { Icon } from '@iconify/react';
import Image from "next/image";
import Me from "@/assets/me.jpg";
import obj from "@/i18n/zh.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
    <div className="wrapper">
      <div className="cover cover-left"></div>
      <div className="cover cover-right turn"></div>

      <div className="book">
        <div className="book-page page-left">
          <div className="profile-page">
            <Image src={Me} alt=""/>
            <h1>{obj.name}</h1>
            <h3>{obj.position}</h3>
            <div className="social-media">
              <a href="#">
                <Icon icon="fa:envelope" />
                {/* ms.fan.yuting@outlook.com */}
              </a>
              <a href="#">
                <Icon icon="fa:phone" />
                {/* 17602134829 */}
              </a>
              <a href="#">
                <Icon icon="fa:wechat" />
                {/* ToZero0923 */}
              </a>
            </div>
            <p>{obj.introduction}</p>
            <div className="btn-box">
              <a href="#" className="btn">{obj.downloadCV}</a>
              <a href="#" className="btn contac-me">{obj.contactMe}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
  );
}

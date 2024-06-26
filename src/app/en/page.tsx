"use client"
import { Icon } from '@iconify/react';
import Image from "next/image";
import obj from "@/i18n/en.json";
import works from "@/mock/work-experience-en.json"
import projects from "@/mock/project-experience-en.json"
import edus from "@/mock/educations-en.json"

export default function Home() {
  const handlePage = (index: number, id: string) => {
    const pageTurn = document.getElementById("turn-"+id);
    if(pageTurn?.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = (20 - index).toString();
      }, 500);
    } else {
      if(pageTurn) {
        pageTurn.classList.add("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = (20 + index).toString();
        }, 500);
      }
    }
  }
  return (
    <main className="flex flex-col items-center justify-between">
    <div className="wrapper">
        <div className="language"><a href="/zh">中文</a></div>
      <div className="cover cover-left"></div>
      <div className="cover cover-right turn"></div>

      <div className="book">
        <div className="book-page page-left">
          <div className="profile-page">
            <Image src="/me.jpg" width={180} height={180} alt=""/>
            <h1>{obj.name}</h1>
            <h3>{obj.position}</h3>
            <div className="social-media">
              <a href="mailto:Ms.Fan.Yuting@outlook.com">
                <span><Icon icon="fa:envelope" /></span>
                Ms.Fan.Yuting@outlook.com
              </a>
              <a href="tel:17602134829">
                <span><Icon icon="fa:phone" /></span>
                17602134829
              </a>
            </div>
            <p>{obj.introduction}</p>
            <div className="btn-box">
              <a href="/FanYuTingCV.pdf" className="btn" target="_blank">{obj.downloadCV}</a>
            </div>
          </div>
        </div>
        <div className="book-page page-right" id="turn-1">
          {/* page 1 work experience */}
          <div className="page-front">
            <h1 className="title">{obj.workExperience}</h1>
            <div className="workeduc-box">
              <div key={works.work1.id}  className="workeduc-content">
                <span className="year">
                  <Icon icon="fa:calendar" />{works.work1.year}
                </span>
                <h3><b>{works.work1.company}</b> - {works.work1.position}</h3>
                <p>{obj.jobDesc}:{works.work1.jobDesc}</p>
                <ul>
                  {
                    works.work1.works.map((work, index) => <li key={index}><b>{work.title}</b>:{work.content}</li>)
                  }
                </ul>
              </div>
            </div>
            <span className="number-page">1</span>

            <span className="nextprev-btn" onClick={() => handlePage(0, "1")}>
              <Icon icon="fa:angle-right" />
            </span>
          </div>
          {/* page 2 education */}
          <div className="page-back">
            <div className="workeduc-box">
              <div key={works.work2.id}  className="workeduc-content">
                <span className="year">
                  <Icon icon="fa:calendar" />{works.work2.year}
                </span>
                <h3><b>{works.work2.company}</b> - {works.work2.position}</h3>
                <ul>
                  {
                    works.work2.works.map((work, index) => <li key={index}><b>{work.title}</b>:{work.content}</li>)
                  }
                </ul>
              </div>
            </div>
            
            <span className="number-page">2</span>

            <span className="nextprev-btn back" onClick={() => handlePage(0, "1")}>
              <Icon icon="fa:angle-left" />
            </span>
          </div>
        </div>
        <div className="book-page page-right" id="turn-2">
          <div className="page-front">
            <div className="workeduc-box">
              <div key={works.work3.id}  className="workeduc-content">
                <span className="year">
                  <Icon icon="fa:calendar" />{works.work3.year}
                </span>
                <h3><b>{works.work3.company}</b> - {works.work3.position}</h3>
                <ul>
                  {
                    works.work3.works.map((work, index) => <li key={index}><b>{work.title}</b>:{work.content}</li>)
                  }
                </ul>
              </div>
            </div>
            
            <span className="number-page">3</span>

            <span className="nextprev-btn" onClick={() => handlePage(1, "2")}>
              <Icon icon="fa:angle-right" />
            </span>
          </div>
          <div className="page-back">
            <div className="workeduc-box">
              <div key={works.work4.id}  className="workeduc-content">
                <span className="year">
                  <Icon icon="fa:calendar" />{works.work4.year}
                </span>
                <h3><b>{works.work4.company}</b> - {works.work4.position}</h3>
                <ul>
                  {
                    works.work4.works.map((work, index) => <li key={index}><b>{work.title}</b>:{work.content}</li>)
                  }
                </ul>
              </div>
            </div>
            
            
            <span className="number-page">4</span>

            <span className="nextprev-btn back" onClick={() => handlePage(2, "2")}>
              <Icon icon="fa:angle-left" />
            </span>
          </div>
        </div>
        <div className="book-page page-right" id="turn-3">
          <div className="page-front">
          <div className="workeduc-box">
              <div key={works.work5.id}  className="workeduc-content">
                <span className="year">
                  <Icon icon="fa:calendar" />{works.work5.year}
                </span>
                <h3><b>{works.work5.company}</b> - {works.work5.position}</h3>
                <ul>
                  {
                    works.work5.works.map((work, index) => <li key={index}><b>{work.title}</b>:{work.content}</li>)
                  }
                </ul>
              </div>
            </div>
           
            <span className="number-page">5</span>

            <span className="nextprev-btn" onClick={() => handlePage(3, "3")}>
              <Icon icon="fa:angle-right" />
            </span>
          </div>
          <div className="page-back">
            <h1 className="title">{obj.projectExperience}</h1>
            <div className="workeduc-box">
            {
              projects.project1.map((item) => 
                <div key={item.id}  className="workeduc-content">
                  <span className="year">
                    <Icon icon="fa:calendar" />{item.year}
                  </span>
                  <h3><b>{item.project}</b></h3>
                  <p><b>{obj.projectDesc}</b> : {item.projectDesc}</p>
                  <p><b>{obj.responsibility}</b> : {item.responsibility}</p>
                  <p><b>{obj.achiev}</b> : </p>
                  {Array.isArray(item.achiev) ? item.achiev.map((item, i) => <p key={i}>{item}</p>) : <p>{item.achiev}</p>}
                </div>
              )
            }
            </div>
            
            
            <span className="number-page">6</span>

            <span className="nextprev-btn back" onClick={() => handlePage(4, "3")}>
              <Icon icon="fa:angle-left" />
            </span>
          </div>
        </div>
        <div className="book-page page-right" id="turn-4">
          <div className="page-front">
            <div className="workeduc-box">
              {
                projects.project2.map((item) => 
                  <div key={item.id}  className="workeduc-content">
                    <span className="year">
                      <Icon icon="fa:calendar" />{item.year}
                    </span>
                    <h3><b>{item.project}</b></h3>
                    <p><b>{obj.projectDesc}</b> : {item.projectDesc}</p>
                    <p><b>{obj.responsibility}</b> : {item.responsibility}</p>
                    <p><b>{obj.achiev}</b> : </p>
                    {Array.isArray(item.achiev) ? item.achiev.map((item, i) => <p key={i}>{item}</p>) : <p>{item.achiev}</p>}
                  </div>
                )
              }
            </div>
            
            <span className="number-page">7</span>

            <span className="nextprev-btn" onClick={() => handlePage(5, "4")}>
              <Icon icon="fa:angle-right" />
            </span>
          </div>
          <div className="page-back">
            <div className="workeduc-box">
              {
                projects.project3.map((item) => 
                  <div key={item.id}  className="workeduc-content">
                    <span className="year">
                      <Icon icon="fa:calendar" />{item.year}
                    </span>
                    <h3><b>{item.project}</b></h3>
                    <p><b>{obj.projectDesc}</b> : {item.projectDesc}</p>
                    <p><b>{obj.responsibility}</b> : {item.responsibility}</p>
                    <p><b>{obj.achiev}</b> : </p>
                    {Array.isArray(item.achiev) ? item.achiev.map((item, i) => <p key={i}>{item}</p>) : <p>{item.achiev}</p>}
                  </div>
                )
              }
            </div>
            <span className="number-page">8</span>

            <span className="nextprev-btn back" onClick={() => handlePage(6, "4")}>
              <Icon icon="fa:angle-left" />
            </span>
          </div>
        </div>
        <div className="book-page page-right" id="turn-5">
          <div className="page-front">
            <h1 className="title">{obj.education}</h1>
            <div className="workeduc-box">
            {
              edus.map((item) => 
                <div key={item.id}  className="workeduc-content">
                  <span className="year">
                    <Icon icon="fa:calendar" />{item.year}
                  </span>
                  <p><b>{item.attr}</b></p>
                  <h3><b>{item.master}</b> - {item.school}</h3>
                  {item.desc && <p>{item.desc}</p>}
                </div>
              )
            }
            </div>
            <span className="number-page">9</span>

            <span className="nextprev-btn" onClick={() => handlePage(7, "5")}>
              <Icon icon="fa:angle-right" />
            </span>
          </div>
          <div className="page-back">
            <h1 className="title">{obj.mySkills}</h1>

            <div className="skills-box">
              <div className="skills-content">
                <h3>{obj.frontEnd}</h3>
                <div className="content">
                  <span><Icon icon="mdi:language-html5" />HTML</span>
                  <span><Icon icon="ion:logo-css3" />CSS</span>
                  <span><Icon icon="mdi:language-javascript"/>JS</span>
                  <span><Icon icon="mdi:language-typescript"/>TS</span>
                  <span><Icon icon="ri:reactjs-fill" />React</span>
                  <span><Icon icon="mdi:vuejs" />Vue</span>
                  <span><Icon icon="mdi:bootstrap" />Bootstrap</span>
                  <span><Icon icon="vscode-icons:file-type-scss" />SASS</span>
                  <span><Icon icon="simple-icons:apacheecharts" />eCharts</span>
                  <span><Icon icon="devicon:antdesign" />AndD</span>
                  <span><Icon icon="mingcute:wechat-miniprogram-fill" />Taro</span>
                  <span><Icon icon="devicon:jquery" />jQuery</span>
                  <span><Icon icon="devicon:materialui" /> MaterialUI</span>
                </div>
              </div>
              <div className="skills-content">
                <h3>{obj.backEnd}</h3>
                <div className="content">
                  {/* <span><Icon icon="mdi:language-python" />Python</span>
                  <span><Icon icon="devicon:java-wordmark" />Java</span>
                  <span><Icon icon="bx:bxl-php" />PHP</span> */}
                  <span><Icon icon="mdi:nodejs" />Node</span>
                </div>
              </div>
              {/* <div className="skills-content">
                <h3>{obj.ui}</h3>
                <div className="content">
                  <span><Icon icon="ion:logo-figma" />Figma</span>
                </div>
              </div> */}
            </div>
            <span className="number-page">10</span>

            <span className="nextprev-btn back" onClick={() => handlePage(8, "5")}>
              <Icon icon="fa:angle-left" />
            </span>
          </div>
        </div>
      </div>
    </div>

  </main>
  );
}

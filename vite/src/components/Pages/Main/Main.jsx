import React from "react";
import Subtitle from "../../UI/Subtitle/Subtitle";
import CardImg from "../../Cards/CardImg/CardImg";
import MainLinks from "./MainLinks/MainLinks";
import CardImgSec from "../../Cards/CardImgSec/CardImgSec";
import styles from "../Main/Main.module.css";
import Title from "../../UI/Title/Title";
import Cards from "../../Cards/Cards";
import Card from "../../Cards/Card/Card";

function Main() {
  return (
    <>
      <div className={styles.main_wrapper}>
        <div className={styles.main_text}>
          <CardImg>
            <Title title={`Потеряться - не значит пропасть`} />
            <Subtitle
              subtitle={`Поисково-спасательный отряд «Добрый Лис» ищет тех, кто потерялся в лесу и городе.`}
            />
          </CardImg>
        </div>
        <div className={styles.m_img}>
          <CardImgSec>
            <MainLinks href="/police">
              <Title title={`Пять правил эффективного заявления в полицию.`} />
            </MainLinks>
            <Subtitle
              subtitle={`Пять правил эффективного заявления в полицию (и почему оно обязательно нужно!) Заявки о пропаже в поисково-спасательный отряд «Добрый Лис» поступают круглосуточно.`}
            />
          </CardImgSec>
        </div>
      </div>
      <div className={styles.main_fotter}>
        <Title title={`Что делать (FAQ)`} />
        <Cards>
          <Card>
            <a class="navbar-brand" href="/summer">
              <img
                src="../../../../public/img/main/sun.svg"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
            </a>
            <MainLinks href="/summer">
              <Title title={`Летние опасности`} />
            </MainLinks>
            <Subtitle
              subtitle={`Многие дети летом остаются в городе или уезжают в другие города к бабушкам и дедушкам в гости. Важно помнить, какие есть городские опасности и как с этим бороться.`}
            />
          </Card>
          <Card>
            <a class="navbar-brand" href="/forest">
              <img
                src="../../../../public/img/main/loupe-search.svg"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
            </a>
            <MainLinks href="/forest">
              <Title title={`Как не потеряться в лесу?`} />
            </MainLinks>
            <Subtitle
              subtitle={`12 советов, как не заблудиться в лесу. Почему нельзя недооценивать опасность леса и что следует знать детям и родителям.`}
            />
          </Card>
          <Card>
            <a class="navbar-brand" href="/hidden">
              <img
                src="../../../../public/img/main/people.svg"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
            </a>
            <MainLinks href="/hidden">
              <Title title={`Пропал человек, что делать?`} />
            </MainLinks>
            <Subtitle
              subtitle={`…ушла в лес за грибами, нет вторые сутки…вышел с работы в 17:30 с тех пор местонахождение неизвестно…помогите, пропал ребенок!…`}
            />
          </Card>
        </Cards>
      </div>
    </>
  );
}

export default Main;

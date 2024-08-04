"use client"
import '@fortawesome/fontawesome-svg-core/styles.css';
import HeaderComponent from "@components/Header/Header";
import HomepageComponent from "@components/Homepage/Homepage";

export default function Home() {
  return (
      <>
      <HeaderComponent/>
        <HomepageComponent/>
      </>
  );
}

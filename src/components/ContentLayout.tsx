"use client";

import { Button } from "@zendeskgarden/react-buttons";
import {
  Body,
  Chrome,
  Content,
  Footer,
  Header,
  Main,
  Nav,
} from "@zendeskgarden/react-chrome";
import PersonIcon from "@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg";
import BookIcon from "@zendeskgarden/svg-icons/src/26/book.svg";
import HomeIcon from "@zendeskgarden/svg-icons/src/26/home-fill.svg";
import ZendeskIcon from "@zendeskgarden/svg-icons/src/26/zendesk.svg";
import AppIcon from "@zendeskgarden/svg-icons/src/26/app.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Chrome isFluid>
      <Nav>
        <Nav.Item hasLogo>
          <Nav.ItemIcon>
            <AppIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Logo</Nav.ItemText>
        </Nav.Item>
        <Nav.List>
          <Nav.Item isCurrent={pathname === "/"} onClick={() => router.push("/")}>
            <Nav.ItemIcon>
              <HomeIcon />
            </Nav.ItemIcon>
            <Nav.ItemText>Home</Nav.ItemText>
          </Nav.Item>
          <Nav.Item isCurrent={pathname === "/book"} onClick={() => router.push("/book")}>
            <Nav.ItemIcon>
              <BookIcon />
            </Nav.ItemIcon>
            <Nav.ItemText>Book</Nav.ItemText>
          </Nav.Item>
        </Nav.List>
        <Nav.Item hasBrandmark title="Zendesk">
          <Nav.ItemIcon>
            <ZendeskIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Zendesk</Nav.ItemText>
        </Nav.Item>
      </Nav>
      <Body>
        <Header>
          <Header.Item>
            <Header.ItemIcon>
              <PersonIcon />
            </Header.ItemIcon>
          </Header.Item>
        </Header>
        <Content>
          <Main>{children}</Main>
        </Content>
        <Footer>
          <Footer.Item>
            <Button>Submit</Button>
          </Footer.Item>
        </Footer>
      </Body>
    </Chrome>
  );
};

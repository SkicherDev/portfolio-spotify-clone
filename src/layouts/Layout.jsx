import LeftSidebar from "../components/Left";
import RightSidebar from "../components/Right";
import styled from "@emotion/styled";

function Layout({ children }) {
  const LayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  return (
    <>
      <LayoutWrapper>
        <LeftSidebar />
        {children}
        <RightSidebar />
      </LayoutWrapper>
    </>
  );
}

export default Layout;

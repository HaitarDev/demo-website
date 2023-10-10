import styled from "styled-components";
import PageNavbar from "./PageNavbar";
import PageBody from "./PageBody";
import { usePageStateContext } from "../../context/usePageContext";
import { motion } from "framer-motion";

const PageContainer = styled(motion.div)`
  font-size: 1.2rem;
  min-height: 100%;
  height: 80rem;
  width: 70%;
  border-radius: 3rem;
  box-shadow: 0px 1px 8px #0000005c;
  overflow: hidden;
  transition: all 4s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }

  &,
  &.light-mode {
    /* Gray */
    --color-gray-50: #f8fafc;
    --color-gray-100: #f1f5f9;
    --color-gray-200: #e2e8f0;
    --color-gray-300: #cbd5e1;
    --color-gray-400: #94a3b8;
    --color-gray-500: #64748b;
    --color-gray-600: #475569;
    --color-gray-700: #334155;
    --color-gray-800: #1e293b;
    --color-gray-900: #0f172a;

    --color-indigo-500: #3b82f6;
    --color-indigo-200: #c7d2fe;
  }

  &.dark-mode {
    /* Dark Gray */
    --color-gray-900: #f8fafc;
    --color-gray-800: #f1f5f9;
    --color-gray-700: #e2e8f0;
    --color-gray-600: #cbd5e1;
    --color-gray-500: #94a3b8;
    --color-gray-400: #64748b;
    --color-gray-300: #475569;
    --color-gray-200: #334155;
    --color-gray-100: #1e293b;
    --color-gray-50: #0f172a;

    --color-indigo-500: #3b82f6;
    --color-indigo-200: #c7d2fe;
  }
`;

function Page() {
  const { isDark } = usePageStateContext();
  return (
    <PageContainer className={isDark ? "dark-mode" : "light-mode"}>
      <PageNavbar />
      <PageBody />
    </PageContainer>
  );
}
export default Page;

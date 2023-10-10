import styled from "styled-components";
import { gridInfo } from "../../../utils/data";
import GridList from "./GridList";
// CSS
const ListContainer = styled.div``;

function ArticlesList() {
  return (
    <ListContainer>
      {gridInfo.map((info, i) => (
        <GridList
          key={i}
          title={info.title}
          comment={info.comments}
          like={info.likes}
        />
      ))}
    </ListContainer>
  );
}
export default ArticlesList;

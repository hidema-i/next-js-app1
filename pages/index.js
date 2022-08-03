import { useState } from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import RestaurantList from "./components/RestaurantsList";

const index = () => {
  //フィルタリング
  const [query, setQuery] = useState("");

  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupText>探す</InputGroupText>
              <Input
                placeholder="お店を探す"
                //input属性を(e.target.value)に格納。。。setQueryに格納しqueryに入っていく
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} //toLocaleLowerCaseで大文字も小文字
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
};

export default index;

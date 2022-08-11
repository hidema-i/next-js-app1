import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import Link from "next/link";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Cart from "./components/Cart";

const GET_RESTAURANT_DISHES = gql`
  query ($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

const Restaurants = (props) => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
  });
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!!</h1>;
  console.log(data);

  if (data) {
    const { restaurant } = data;
    return (
      <>
        <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((res) => {
            return (
              <Col xs="6" sm="4" key={res.id} style={{ padding: 0 }}>
                <Card style={{ margin: "0 10px" }}>
                  <CardImg
                    src={`${process.env.NEXT_PUBLIC_API_URL}${res.image.url}`}
                    top={true}
                    style={{ height: 250 }}
                  />
                  <CardBody>
                    <CardTitle>{res.name}</CardTitle>
                    <CardTitle>{res.description}</CardTitle>
                  </CardBody>
                  <div className="card-footer">
                    <Button outline color="primary">
                      + カートに入れる
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}

          <style jsx>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
              }
              a:hover {
                color: white;
              }
              .card-colums {
                colimn-count: 3;
              }
            `}
          </style>

          {/* cart */}
          <Col xs="3" style={{ padding: 0 }}>
            <div>
              <Cart />
            </div>
          </Col>
        </Row>
      </>
    );
  } else {
    <h1>レストランが見つかりませんでした。</h1>;
  }
};

export default Restaurants;

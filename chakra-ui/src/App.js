import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

function App() {
  const datas = [
    {
      id: 1,
      title: "Fix the navbar",
      description:
        "There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices.",
      author: "Mario",
      img: "https://i.pinimg.com/236x/67/0f/c0/670fc0099cfb9cbc5f3e33707cc63fe8.jpg",
    },
    {
      id: 2,
      title: "Add links to the footer",
      description:
        "The footer is currently empty. We need to add some links to important pages on the site.",
      author: "Yoshi",
      img: "https://i.pinimg.com/236x/f9/50/0d/f9500d580442b6019b98526aa6cd185a.jpg",
    },
    {
      id: 3,
      title: "Update the contact form",
      description:
        "The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.",
      author: "Peach",
      img: "https://i.pinimg.com/236x/57/3c/e4/573ce40de998ab2523fbbb3675673abb.jpg",
    },
    {
      id: 4,
      title: "Improve the site's performance",
      description:
        "The site is currently running slow. We need to optimize images and minify CSS and JavaScript to improve the site's loading speed.",
      author: "Luigi",
      img: "https://i.pinimg.com/236x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg",
    },
    {
      id: 5,
      title: "Add social media links",
      description:
        "There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.",
      author: "Mario",
      img: "https://i.pinimg.com/236x/43/9e/79/439e7900cca1116ca004204cd902354b.jpg",
    },
    {
      id: 6,
      title: "Implement a search feature",
      description:
        "The site does not have a search feature. We need to add a search bar in the header that allows users to search for specific pages or products on the site.",
      author: "Yoshi",
      img: "https://i.pinimg.com/236x/74/a5/8e/74a58ee7094a9901ea8f5ab7ce9b9713.jpg",
    },
    {
      id: 7,
      title: "Fix the responsive layout",
      description:
        "The site's layout is not responsive. It does not look good on mobile devices. We need to make sure the site looks good on all devices.",
      author: "Peach",
      img: "https://i.pinimg.com/236x/ca/73/cd/ca73cd55c62f403bbaea57647f63d72c.jpg",
    },
    {
      id: 8,
      title: "Add a newsletter signup form",
      description:
        "We do not have a way for users to sign up for our newsletter. We need to add a newsletter signup form in the footer that allows users to enter their email address.",
      author: "Luigi",
      img: "https://i.pinimg.com/236x/bf/2b/33/bf2b33435d1bdc31fd48a1e6ecc3e346.jpg",
    },
    {
      id: 9,
      title: "Improve the design",
      description:
        "The site's design is outdated. We need to update the site's color scheme and font to make it look more modern.",
      author: "Mario",
      img: "https://i.pinimg.com/236x/67/38/b2/6738b2c065eade64cf0befd53449687d.jpg",
    },
    {
      id: 10,
      title: "Add more products to the online store",
      description:
        "We need to add more products to the online store. We also need to add categories and filters to make it easier for users to find what they are looking for.",
      author: "Yoshi",
      img: "https://i.pinimg.com/236x/e0/3a/ca/e03aca81676a4985b8f85f4296068a16.jpg",
    },
  ];

  return (
    <Flex wrap="wrap">
      {datas.map((data) => {
        return (
          <Card m="1.5rem" w="15rem">
            <CardHeader>
              <Text>{data.title}</Text>
            </CardHeader>
            <CardBody>
              <img
                src={data.img}
                alt={data.title}
                style={{ borderRadius: "0.5rem" }}
              />
            </CardBody>
            <CardFooter>
              <Button variant="ghost" mr="1rem" leftIcon={<ViewIcon />}>
                Watch
              </Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>
                Comment
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </Flex>
  );
}

export default App;

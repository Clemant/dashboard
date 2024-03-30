"use client";

import { TitleHeader } from "@/components";
import CardsSection from "@/components/main_component/CardsSection";
import {
  Alert,
  Button,
  Divider,
  Group,
  Modal,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

// "mongodb";
import { CardsSerctionType } from "@/helper/propsTypes";

const Cards = () => {
  // const MongoClient = require("mongodb");
  const [opened, { open, close }] = useDisclosure(false);

  const defaultDescription =
    "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.";

  const URL: string =
    process.env.URL != undefined
      ? process.env.URL
      : "mongodb://localhost:27017/";

  const DBNAME: string =
    process.env.DB_NAME != undefined ? process.env.DB_NAME : "defaultdb";

  const COLLECTIONNAME: string =
    process.env.COLLECTION_NAME != undefined
      ? process.env.COLLECTION_NAME
      : "defaultcollection";

  // Function
  const form = useForm({
    initialValues: {
      title: "",
      img: "",
      price: 0.0,
      description: "",
      id: undefined,
    },

    /*initialValues: {
      email: "",
    },
    
    /*validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },*/
  });

  const handleSubmit = async (value: CardsSerctionType) => {
    console.log("get the value: ", value);
    console.log(process.env);
    //  const mongoClient = new MongoClient("localhost:27017/");
    //const client = await mongoClient.connect();

    /*
    const collection = client.db(DBNAME).collection(COLLECTIONNAME);
    collection
      .insertOne({ $push: { cards: value } })
      .then((response) => {
        console.log("ok", response);
      })
      .catch((error) => console.error(error));*/
  };

  //render
  return (
    <div>
      <div className="w-full">
        <TitleHeader title="Cartes" />
        <Group justify={"flex-start"} className="mt-6 mb-10">
          <Button onClick={open} color={"green"}>
            Ajouter une nouvelle carte
          </Button>
        </Group>
        <SimpleGrid cols={4}>
          <CardsSection
            title={"Title 1"}
            id={"1"}
            description={defaultDescription}
            img={"https://picsum.photos/200/300?random"}
            price={12.5}
          />
          <CardsSection
            title={"Title 2"}
            id={"3"}
            description={defaultDescription}
            img={"https://picsum.photos/200/300"}
            price={12.9}
          />
        </SimpleGrid>

        <div className="">
          <Modal
            size="lg"
            opened={opened}
            onClose={close}
            title="Ajouter une carte"
          >
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
              <TextInput
                withAsterisk
                label="Title"
                placeholder="Ex: Carte N°1"
                {...form.getInputProps("title")}
              />

              <TextInput
                withAsterisk
                label="Description"
                placeholder="Lorem ipsum..."
                {...form.getInputProps("description")}
              />
              <TextInput
                withAsterisk
                label="Prix"
                placeholder="9,50 &euro;"
                {...form.getInputProps("price")}
              />
              <TextInput
                withAsterisk
                label="Url Images"
                placeholder="your@email.com"
                {...form.getInputProps("img")}
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Cards;

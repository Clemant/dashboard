"use client";

import { CardsSerctionType } from "@/helper/propsTypes";
import { Button, Card, Dialog, Group, Image, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const DeleteCards = () => {
  console.log();
};

const CardsSection = ({
  id,
  title,
  img,
  description,
  price,
}: CardsSerctionType) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Card shadow="sm" padding={"xl"}>
        <Card.Section>
          <Image src={img} h={260} alt={""} />
        </Card.Section>
        <Text fw={500} size={"lg"} mt={"md"}>
          {title}
        </Text>
        <Text mt={"sm"} size={"md"} c={"dimmed"}>
          {description}
        </Text>
        <Text mt={"sm"} size={"lg"} c={"dark"}>
          Prix: {price} &euro;
        </Text>

        <Group className="mt-9" justify={"flex-end"}>
          <Button> Editer</Button>
          <Button onClick={toggle} color={"red"}>
            Supprimer
          </Button>
        </Group>
      </Card>

      <Modal
        opened={opened}
        withCloseButton={true}
        onClose={close}
        title="Confirmation: Suppression cartes"
        centered={true}
        size={"lg"}
      >
        <Text>Veuillez confirmer cette action.</Text>
        <Group justify="flex-end">
          <Button onClick={close}>Annuler</Button>
          <Button
            onClick={() => {
              DeleteCards;
            }}
            color={"red"}
          >
            Supprimer
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default CardsSection;

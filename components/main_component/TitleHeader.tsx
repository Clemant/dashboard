import { Divider, Text, Title } from "@mantine/core";

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <div className="my-3">
      <Title order={2} size="h1">
        {title}
      </Title>
      <Text size="sm" className="mx-5">
        {" "}
        Cut Made Folded
      </Text>
      <Divider size={"sm"} />
    </div>
  );
};

export default TitleHeader;

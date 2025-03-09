import ProjectType from "@/app/types/Project";
import { Box, Button, Heading, Image, Link } from "@chakra-ui/react";

const ProjectDetail = (props: {
  project: ProjectType | null;
  handleClick: () => void;
}) => {
  const { project, handleClick } = props;

  if (!project) {
    return <Box>loading...</Box>;
  }

  return (
    <Box>
      <Heading>{project.title}</Heading>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          src={project.image_url?.toString()}
          objectFit="cover"
          alt={project.title}
          justifyContent={"center"}
          w={"100%"}
        />
      </Box>
      <Box>{project.description}</Box>
      <Link display={"block"} mt={2} mb={2} href={project.portfolio_url}>
        ポートフォリオのリンク
      </Link>
      {project.tag.map((tag) => (
        <Box
          key={tag}
          p={1}
          pr={2}
          pl={2}
          bg={"gray.500"}
          color={"white"}
          borderRadius={10}
          display={"inline-block"}
          mr={3}
        >
          {tag}
        </Box>
      ))}

      <Button onClick={handleClick}>このプロジェクトを削除する</Button>

      <Box textAlign={"right"} mt={4}>
        <Link href="/dashboard/project-list/">一覧へ戻る</Link>
      </Box>
    </Box>
  );
};

export default ProjectDetail;

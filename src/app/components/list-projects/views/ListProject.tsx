import Project from "@/app/model/project";
import { Box, HStack, Image, Stack, Text, Tag, Link } from "@chakra-ui/react";

const ListProject = (props: { projects: Project[] }) => {
  const { projects } = props;

  return (
    <Box w="100%" mt={10}>
      <Stack spacing={4}>
        {projects.map((project) => (
          <HStack
            key={project.id}
            p={4}
            borderWidth={2}
            borderRadius={10}
            borderColor="gray.200"
            _hover={{
              borderColor: "gray.300",
            }}
            transition="all 0.3s ease"
            cursor="pointer"
            alignItems="flex-start"
          >
            <Link href={`/dashboard/project-list/project-detail/${project.id}`}>
              <Box w={40} h={40}>
                <Image
                  src={project.image?.toString()}
                  w={40}
                  h={40}
                  objectFit="cover"
                  alt={project.title}
                />
              </Box>
              <Box flex={1} overflow="hidden" pl={4}>
                <Stack>
                  <HStack
                    borderBottom="3px solid"
                    borderColor="gray.300"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={2}
                  >
                    <Stack>
                      <Text>{project.title}</Text>
                    </Stack>
                    <HStack>
                      {project.tag.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </HStack>
                  </HStack>
                  <Text noOfLines={2}>{project.description}</Text>
                </Stack>
              </Box>
            </Link>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default ListProject;

"use client";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import CategorySelector from "@/app/components/utility/CategorySelector";

type CreateProjectFormProps = {
  categories: string[];
  selectedCategories: string[];
  handleNewCategory: (newCategory: string) => void;
  handleSubmit: () => void;
  setSelectedCategories: (newSelected: string[]) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  description: string;
  url: string;
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewImage: string | undefined;
};

const CreateProjectForm = (props: CreateProjectFormProps) => {
  const {
    categories,
    selectedCategories,
    handleNewCategory,
    handleSubmit,
    setSelectedCategories,
    handleTitleChange,
    handleDescriptionChange,
    handleUrlChange,
    handleImageChange,
    title,
    description,
    url,
    email,
    handleEmailChange,
    previewImage,
  } = props;
  return (
    <Box>
      <Heading>プロジェクト作成</Heading>
      <FormControl>
        {/* タイトル */}
        <FormLabel mt={4}>タイトル</FormLabel>
        <Input
          type="text"
          placeholder="タイトル"
          onChange={handleTitleChange}
          value={title}
        />

        {/* 説明 */}
        <FormLabel mt={4}>説明</FormLabel>
        <Textarea
          rows={4}
          placeholder="説明"
          borderRadius="md"
          borderColor="gray.300"
          onChange={handleDescriptionChange}
          value={description}
        />

        {/* カテゴリ */}
        <FormLabel mt={4}>メールアドレス</FormLabel>
        <Input
          type="email"
          placeholder="メールアドレス"
          onChange={handleEmailChange}
          value={email}
        />

        {/* カテゴリ */}
        <CategorySelector
          allCategories={categories}
          selectedCategories={selectedCategories}
          onChange={setSelectedCategories}
          onNewCategoryAdded={handleNewCategory}
          label="技術スタック"
          placeholder="新しい技術を追加"
        />

        {/* URL */}
        <FormLabel mt={4}>URL</FormLabel>
        <Input
          type="url"
          placeholder="URL"
          onChange={handleUrlChange}
          value={url}
        />

        {/* 画像 */}
        <FormLabel mt={4}>画像</FormLabel>
        <Input
          type="file"
          accept="image/*"
          style={{ border: "none", outline: "none", boxShadow: "none" }}
          onChange={handleImageChange}
        />
        {previewImage && <Image src={previewImage} alt="Preview" w={"50%"} />}

        {/* 作成ボタン */}
        <Button mt={4} type="submit" colorScheme="blue" onClick={handleSubmit}>
          作成
        </Button>
      </FormControl>
    </Box>
  );
};

export default CreateProjectForm;

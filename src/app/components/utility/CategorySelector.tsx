"use client";
import {
  FormLabel,
  Input,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useState, useRef, useCallback } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type InlineCategorySelectorProps = {
  allCategories: string[];
  selectedCategories: string[];
  onChange: (newSelected: string[]) => void;
  onNewCategoryAdded?: (newCategory: string) => void;
  label?: string;
  placeholder?: string;
};

const InlineCategorySelector = ({
  allCategories,
  selectedCategories,
  onChange,
  onNewCategoryAdded,
  label = "カテゴリー",
  placeholder = "新しいカテゴリーを追加",
}: InlineCategorySelectorProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // カテゴリーを追加（新規 or 選択）
  const handleAddCategory = useCallback(
    (category: string, isNew: boolean = false) => {
      const trimmedValue = category.trim();
      if (trimmedValue && !selectedCategories.includes(trimmedValue)) {
        const updatedCategories = [...selectedCategories, trimmedValue];
        onChange(updatedCategories);

        // 新しいカテゴリーの場合は親に通知
        if (isNew && onNewCategoryAdded) {
          onNewCategoryAdded(trimmedValue);
        }
      }
      setInputValue("");
    },
    [selectedCategories, onChange, onNewCategoryAdded]
  );

  // エンターキーやカンマで新しいカテゴリーを追加
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        handleAddCategory(inputValue, true); // 新規カテゴリーとして追加
      }

      // Backspaceで最後のカテゴリーを削除
      if (
        e.key === "Backspace" &&
        !inputValue &&
        selectedCategories.length > 0
      ) {
        const newCategories = [...selectedCategories];
        newCategories.pop();
        onChange(newCategories);
      }
    },
    [handleAddCategory, inputValue, selectedCategories, onChange]
  );

  // カテゴリーの削除（タグの×ボタン）
  const handleRemoveCategory = useCallback(
    (categoryToRemove: string) => {
      const updated = selectedCategories.filter(
        (cat) => cat !== categoryToRemove
      );
      onChange(updated);
    },
    [selectedCategories, onChange]
  );

  // 選択可能なカテゴリー（選択済みを除外）
  const availableCategories = allCategories.filter(
    (category) => !selectedCategories.includes(category)
  );

  return (
    <Box mt={4} mb={4}>
      <FormLabel>{label}</FormLabel>

      {/* Inputフィールド内にタグ、Input、Selectを表示 */}
      <Flex
        wrap="wrap"
        border="1px solid rgb(226, 232, 240)"
        borderRadius="md"
        p={2}
        minHeight="50px"
        gap={2}
        alignItems="center"
        onClick={() => inputRef.current?.focus()}
      >
        {selectedCategories.map((category) => (
          <Tag
            key={category}
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme="teal"
          >
            <TagLabel>{category}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveCategory(category)} />
          </Tag>
        ))}

        {/* テキスト入力フィールド */}
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          border="none"
          boxShadow="none"
          _focus={{ boxShadow: "none" }}
          width="auto"
          flex="1"
          placeholder={placeholder}
        />
      </Flex>

      {/* カスタムドロップダウンで既存カテゴリーを選択 */}
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mt={2}>
          既存のカテゴリーを選択
        </MenuButton>
        <MenuList>
          {availableCategories.length > 0 ? (
            availableCategories.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleAddCategory(category)}
              >
                {category}
              </MenuItem>
            ))
          ) : (
            <MenuItem isDisabled>すべて選択済み</MenuItem>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default InlineCategorySelector;

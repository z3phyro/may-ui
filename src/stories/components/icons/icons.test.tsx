import { expect, test } from "vitest";
import { render } from "@solidjs/testing-library"
import BurgerIcon from "./burger.icon";
import ChevronDownIcon from "./chevron-down.icon";
import ChevronUpIcon from "./chevron-up.icon";
import CoverageIcon from "./coverage.icon";
import DeleteIcon from "./delete.icon";
import DuplicateIcon from "./duplicate.icon";
import EditIcon from "./edit.icon";
import FilterIcon from "./filter.icon";
import InfoIcon from "./info.icon";
import LinkIcon from "./link.icon";
import StatsIcon from "./stats.icon";
import TranslationIcon from "./translation.icon";
import TrashIcon from "./trash.icon";
import XIcon from "./x.icon";

test("Burger icon should render correctly", () => {
  const { getByRole } = render(() => <BurgerIcon />);

  const burgerIcon = getByRole("img") as HTMLElement;
  expect(burgerIcon).toBeTruthy();
});

test("Burger icon renders with custom class", () => {
  const { getByRole } = render(() => <BurgerIcon class="custom-class" />);

  const burgerIcon = getByRole("img") as HTMLElement;
  expect(burgerIcon).toBeTruthy();
  expect(burgerIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Chevron icon should render correctly", () => {
  const { getByRole } = render(() => <ChevronDownIcon />);

  const chevronIcon = getByRole("img") as HTMLElement;
  expect(chevronIcon).toBeTruthy();
});

test("Chevron down icon renders with custom class", () => {
  const { getByRole } = render(() => <ChevronDownIcon class="custom-class" />);

  const chevronIcon = getByRole("img") as HTMLElement;
  expect(chevronIcon).toBeTruthy();
  expect(chevronIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Chevron up should render correctly", () => {
  const { getByRole } = render(() => <ChevronUpIcon />);

  const chevronIcon = getByRole("img") as HTMLElement;
  expect(chevronIcon).toBeTruthy();
});

test("Chevron up icon renders with custom class", () => {
  const { getByRole } = render(() => <ChevronUpIcon class="custom-class" />);

  const chevronIcon = getByRole("img") as HTMLElement;
  expect(chevronIcon).toBeTruthy();
  expect(chevronIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Coverage icon should render correctly", () => {
  const { getByRole } = render(() => <CoverageIcon />);

  const coverageIcon = getByRole("img") as HTMLElement;
  expect(coverageIcon).toBeTruthy();
});

test("Coverage icon renders with custom class", () => {
  const { getByRole } = render(() => <CoverageIcon class="custom-class" />);

  const coverageIcon = getByRole("img") as HTMLElement;
  expect(coverageIcon).toBeTruthy();
  expect(coverageIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Delete icon should render correctly", () => {
  const { getByRole } = render(() => <DeleteIcon />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
});

test("Delete icon renders with custom class", () => {
  const { getByRole } = render(() => <DeleteIcon class="custom-class" />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
  expect(deleteIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Duplicate icon should render correctly", () => {
  const { getByRole } = render(() => <DuplicateIcon />);

  const duplicateIcon = getByRole("img") as HTMLElement;
  expect(duplicateIcon).toBeTruthy();
});

test("Duplicate icon renders with custom class", () => {
  const { getByRole } = render(() => <DuplicateIcon class="custom-class" />);

  const duplicateIcon = getByRole("img") as HTMLElement;
  expect(duplicateIcon).toBeTruthy();
  expect(duplicateIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Edit icon should render correctly", () => {
  const { getByRole } = render(() => <EditIcon />);

  const editIcon = getByRole("img") as HTMLElement;
  expect(editIcon).toBeTruthy();
});

test("Edit icon renders with custom class", () => {
  const { getByRole } = render(() => <EditIcon class="custom-class" />);

  const editIcon = getByRole("img") as HTMLElement;
  expect(editIcon).toBeTruthy();
  expect(editIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Filter icon renders correctly", () => {
  const { getByRole } = render(() => <FilterIcon />);

  const filterIcon = getByRole("img") as HTMLElement;
  expect(filterIcon).toBeTruthy();
});

test("Filter icon renders with custom class", () => {
  const { getByRole } = render(() => <FilterIcon class="custom-class" />);

  const filterIcon = getByRole("img") as HTMLElement;
  expect(filterIcon).toBeTruthy();
  expect(filterIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Info icon shuold render correctly", () => {
  const { getByRole } = render(() => <InfoIcon />);

  const infoIcon = getByRole("img") as HTMLElement;
  expect(infoIcon).toBeTruthy();
});

test("Info icon renders with custom class", () => {
  const { getByRole } = render(() => <InfoIcon class="custom-class" />);

  const infoIcon = getByRole("img") as HTMLElement;
  expect(infoIcon).toBeTruthy();
  expect(infoIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Link icon should render correctly", () => {
  const { getByRole } = render(() => <LinkIcon />);

  const linkIcon = getByRole("img") as HTMLElement;
  expect(linkIcon).toBeTruthy();
});

test("Link icon renders with custom class", () => {
  const { getByRole } = render(() => <LinkIcon class="custom-class" />);

  const linkIcon = getByRole("img") as HTMLElement;
  expect(linkIcon).toBeTruthy();
  expect(linkIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Stats icon should render correctly", () => {
  const { getByRole } = render(() => <StatsIcon />);

  const statsIcon = getByRole("img") as HTMLElement;
  expect(statsIcon).toBeTruthy();
});

test("Stats icon renders with custom class", () => {
  const { getByRole } = render(() => <StatsIcon class="custom-class" />);

  const statsIcon = getByRole("img") as HTMLElement;
  expect(statsIcon).toBeTruthy();
  expect(statsIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Translation icon should render correctly", () => {
  const { getByRole } = render(() => <TranslationIcon />);

  const translationIcon = getByRole("img") as HTMLElement;
  expect(translationIcon).toBeTruthy();
});

test("Translation icon renders with custom class", () => {
  const { getByRole } = render(() => <TranslationIcon class="custom-class" />);

  const translationIcon = getByRole("img") as HTMLElement;
  expect(translationIcon).toBeTruthy();
  expect(translationIcon.classList.contains("custom-class")).toBeTruthy();
});

test("Trash icon should render correctly", () => {
  const { getByRole } = render(() => <TrashIcon />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
});

test("Trash icon renders with custom class", () => {
  const { getByRole } = render(() => <TrashIcon class="custom-class" />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
  expect(deleteIcon.classList.contains("custom-class")).toBeTruthy();
});

test("X Icon should render correctly", () => {
  const { getByRole } = render(() => <XIcon />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
});

test("X Icon renders with custom class", () => {
  const { getByRole } = render(() => <XIcon class="custom-class" />);

  const deleteIcon = getByRole("img") as HTMLElement;
  expect(deleteIcon).toBeTruthy();
  expect(deleteIcon.classList.contains("custom-class")).toBeTruthy();
});

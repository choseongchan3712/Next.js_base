import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q}></SearchForm>
      <h2>{q} 검색 결과</h2>
    </>
  );
}

// Rating control used both to show a movie's score and to filter the list by minimum rating.
import { Flex, Rate } from "antd";
const desc = [
  "terrible",
  { placement: "top", title: "bad", trigger: "hover" },
  "normal",
  "good",
  "wonderful",
];

const FilterByRate = ({ searchRate, setSearchRate, isRate, rate }) => {
  return (
    <div className="m-4">
      {isRate ? (
        <Flex gap="medium" vertical>
          <Rate value={rate} disabled />
        </Flex>
      ) : (
        <Flex gap="medium" vertical>
          {/* l'équivalent de l'input  */}
          <Rate tooltips={desc} onChange={setSearchRate} value={searchRate} />
        </Flex>
      )}
    </div>
  );
};

export default FilterByRate;

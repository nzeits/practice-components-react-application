import ConceptItem from "./ConceptItem";

const ConceptList = ({ concepts }) => {
  return (
    <ul id="concepts">
      {concepts.map((concept) => {
        return (
          <ConceptItem
            image={concept.image}
            title={concept.title}
            description={concept.description}
          />
        );
      })}
    </ul>
  );
};

export default ConceptList;

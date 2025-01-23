function* createId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const idGenerator = createId();
export const getUniqueId = () => idGenerator.next().value;

## Installation

```bash
# Install the required dependencies
npm install

# Install a local Neo4j instance
curl http://dist.neo4j.org/neo4j-community-1.8.2-unix.tar.gz --O neo4j-community-1.8.2-unix.tar.gz
tar -zxvf neo4j-community-1.8.2-unix.tar.gz
rm neo4j-community-1.8.2-unix.tar.gz
ln -s neo4j-community-1.8.2/bin/neo4j neo4j
```


## Usage

```bash
# Start the local Neo4j instance
./neo4j start

# Run the app!
npm start
```

The app will now be accessible at [http://localhost:8888/](http://localhost:8888/).

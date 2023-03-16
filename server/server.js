import { createServer } from 'node:net';
import { WebSocketServer } from 'ws';

const players = {
  nameP1: "",
  nameP2: "",
  one: null,
  two: null,
  nextMoveP1: (Math.floor(Math.random() * 10) < 5) ? true : false,
  readyNextMove: false,
  changeQueue: () => {
    if (readyNextMove == true) {
      (nextMoveP1) ? nextMoveP1 = false : nextMoveP1 = false;
    };
  },
};

const roundGame = function() {

  let waitAnswer = (players.nextMoveP1) ? "P1" : "P2";
  let placementShipP1 = false;
  let placementShipP2 = false;

    // data = {
    //   name: "P1" or "P2",
    //   type: connect; state; attack; result; error;
    //   data:  true;   true;   "x,y";  "1"    "err"
    // }

  const listenPlayers = function(data,name) {
    data = JSON.parse(data);
    if (data.type == "state") {
      statePlayers(data, name);
    } else if (data.type == "attack") {
      attackPlayers(data, name);
    } else if (data.type == "result") {
      resultAttack(data, name);
    } else {
      if (name == "P1") {
        players.one.write(JSON.stringify({ name: "P1", type: "error", data: "error type", }));
      } else {
        players.two.send(JSON.stringify({ name: "P2", type: "error", data: "error type", }));
      };
    };
  };

  const statePlayers = function (data, name) {
    if (name == "P1") {
      placementShipP1 = true;
    } else {
      placementShipP2 = true;
    };
    if (placementShipP1 && placementShipP2) {
      players.one.write(JSON.stringify({
        name: "P1",
        type: "state",
        data: true,
      }));
      players.two.send(JSON.stringify({
        name: "P2",
        type: "state",
        data: true,
      }));
    };
  };

  const attackPlayers = function (data, name) {
    if ( players.nextMoveP1 && name == "P1" ) {
      players.two.send(JSON.stringify(data));
      waitAnswer = "P2";
    } else if ( !players.nextMoveP1 && name == "P2") {
      players.one.write(JSON.stringify(data));
      waitAnswer = "P1";
    } else {
      if (name == "P1") {
        players.one.write(JSON.stringify({ name: "P1", type: "error", data: "error attack", }));
      } else {
        players.two.send(JSON.stringify({ name: "P2", type: "error", data: "error attack", }));
      };
    };
  };

  const resultAttack = function (data, name) {
    if (waitAnswer == name) {
      if (data.data == "-1") {
        players.changeQueue();
        waitAnswer = null;
        (name == "P1") ? players.two.send(JSON.stringify(data)) : players.one.write(JSON.stringify(data));
      } else if (data.data == "0" || data.data == "1") {
        waitAnswer = null;
        (name == "P1") ? players.two.send(JSON.stringify(data)) : players.one.write(JSON.stringify(data));
      } else if (data.data == "2") {
        waitAnswer = null;
        (name == "P1") ? players.two.send(JSON.stringify(data)) : players.one.write(JSON.stringify(data));
        // New game!!!!
      } else {
        if (name == "P1") {
          players.one.write(JSON.stringify({ name: "P1", type: "error", data: "error result", }));
        } else {
          players.two.send(JSON.stringify({ name: "P2", type: "error", data: "error result", }));
        };
      };
    } else {
      if (name == "P1") {
        players.one.write(JSON.stringify({ name: "P1", type: "error", data: "error result", }));
      } else {
        players.two.send(JSON.stringify({ name: "P2", type: "error", data: "error result", }));
      };
    };
  };

  return {listenPlayers}
};

const round = roundGame();


const connecters = function () {
  const onConnect = function(conn) {
    if (players.one === null) {
      players.one = conn;
      console.log("connect one")
      conn.setEncoding('utf8')
      conn.write(JSON.stringify({
        name: "P1",
        type: "connect",
        data: players.nextMoveP1,
      }));
      if (players.two != null) {
        console.log({
          name: "P1",
          type: "state",
          data: true,
        });
        console.log({
          name: "P2",
          type: "state",
          data: true,
        })
        players.one.write(JSON.stringify({
          name: "P1",
          type: "state",
          data: true,
        }));
        players.two.send(JSON.stringify({
          name: "P2",
          type: "state",
          data: true,
        }));
      }
      conn.on("data", (data) => {
        round.listenPlayers(data, "P1")
      });
    // } else if (players.two === null) {
    //   players.two = conn;
    //   console.log("connect two")
    //   conn.setEncoding('utf8')
    //   conn.write(JSON.stringify({
    //     name: "P2",
    //     type: "connect",
    //     data: players.nextMoveP1,
    //   }));
    //   conn.on("data", (data) => {
    //     round.listenPlayers(data, "P2")
    //   });
    } else {
      //conn.close();
    };
  };

  const server = createServer(onConnect);
  server.listen({
    host: '192.168.1.195',
    port: 9099,
  });
  server.maxConnections = 1;

  const webSocketServer = new WebSocketServer({port:9098});
  webSocketServer.on("connection", function(ws) {
    if (players.two == null) {
      players.two = ws;
      console.log("connect two")
    };
    ws.send(JSON.stringify({
      name: "P2",
      type: "connect",
      data: players.nextMoveP1,
    }));
    if (players.one != null) {
      console.log({
        name: "P1",
        type: "state",
        data: true,
      });
      console.log({
        name: "P2",
        type: "state",
        data: true,
      })
      players.one.write(JSON.stringify({
        name: "P1",
        type: "state",
        data: true,
      }));
      players.two.send(JSON.stringify({
        name: "P2",
        type: "state",
        data: true,
      }));
    }
    ws.on("message", function(data) {
      console.log(data.toString())
      round.listenPlayers(data, "P2");
    });
  })

};



connecters();


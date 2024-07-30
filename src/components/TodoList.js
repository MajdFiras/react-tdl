import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";

// Icons
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

// Components
import Todo from "./Todo";
import { useState } from "react";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");

  const todosJSX = todos.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />
          {/* Toggle Buttons => Filteration */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
          </ToggleButtonGroup>

          {/* All Todos */}
          {todosJSX}
          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  handleAddClick();
                }}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

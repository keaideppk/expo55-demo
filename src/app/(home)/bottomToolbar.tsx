import { Stack } from "expo-router";
import { useState } from "react";

export default function DocumentScreen() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button
          hidden={isEditing}
          icon="pencil"
          onPress={() => setIsEditing(true)}
        />
        <Stack.Toolbar.Button
          hidden={!isEditing}
          onPress={() => setIsEditing(false)}
        >
          Done
        </Stack.Toolbar.Button>
      </Stack.Toolbar>
      {/* Document content */}
    </>
  );
}

import { useImage } from "expo-image";
import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

export default function NoteScreen() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "date" | "size">("name");
  const [showHiddenFiles, setShowHiddenFiles] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const unreadCount = 5;

  const customIcon = useImage("https://simpleicons.org/icons/expo.svg", {
    maxWidth: 24,
    maxHeight: 24,
  });

  return (
    <>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button
          icon={isFavorite ? "star.fill" : "star"}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Stack.Toolbar.Label>Notifications</Stack.Toolbar.Label>
          {unreadCount > 0 && (
            <Stack.Toolbar.Badge>{String(unreadCount)}</Stack.Toolbar.Badge>
          )}
        </Stack.Toolbar.Button>

        <Stack.Toolbar.Menu icon="ellipsis.circle">
          <Stack.Toolbar.MenuAction
            icon="arrowshape.turn.up.left"
            onPress={() => Alert.alert("Reply")}
          >
            Reply
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon="arrowshape.turn.up.right"
            onPress={() => Alert.alert("Forward")}
          >
            Forward
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon={isArchived ? "tray.full" : "archivebox"}
            isOn={isArchived}
            onPress={() => setIsArchived(!isArchived)}
          >
            {isArchived ? "Unarchive" : "Archive"}
          </Stack.Toolbar.MenuAction>

          <Stack.Toolbar.MenuAction
            icon="trash"
            destructive
            onPress={() => Alert.alert("Delete")}
          >
            Delete
          </Stack.Toolbar.MenuAction>
        </Stack.Toolbar.Menu>
      </Stack.Toolbar>
      <Stack.Toolbar placement="left">
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
      <Stack.Toolbar>
        <Stack.Toolbar.Button
          image={customIcon ?? undefined}
          onPress={() => Alert.alert("Bottom tool bar")}
        />
        <Stack.Toolbar.Menu icon="ellipsis.circle">
          {/* Inline submenu - options appear directly in the menu */}
          <Stack.Toolbar.Menu inline title="Sort By">
            <Stack.Toolbar.MenuAction
              isOn={sortBy === "name"}
              onPress={() => setSortBy("name")}
            >
              Name
            </Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction
              isOn={sortBy === "date"}
              onPress={() => setSortBy("date")}
            >
              Date
            </Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction
              isOn={sortBy === "size"}
              onPress={() => setSortBy("size")}
            >
              Size
            </Stack.Toolbar.MenuAction>
          </Stack.Toolbar.Menu>

          {/* Nested submenu - opens as a separate menu */}
          <Stack.Toolbar.Menu title="Preferences">
            <Stack.Toolbar.MenuAction
              isOn={showHiddenFiles}
              onPress={() => setShowHiddenFiles(!showHiddenFiles)}
            >
              Show Hidden Files
            </Stack.Toolbar.MenuAction>
          </Stack.Toolbar.Menu>
        </Stack.Toolbar.Menu>
        <Stack.Toolbar.Spacer />
        <Stack.Toolbar.View>
          <Pressable
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              Alert.alert("Filter pressed");
            }}
          >
            <SymbolView name="line.3.horizontal.decrease.circle" size={24} />
          </Pressable>
        </Stack.Toolbar.View>
      </Stack.Toolbar>
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Note content...</Text>
      </View>
    </>
  );
}

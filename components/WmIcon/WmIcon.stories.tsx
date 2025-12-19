import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import WmIcon from "@wavemaker/app-rn-runtime/components/basic/icon/icon.component";
import { glyphMap as waviconGlyphMap } from "@wavemaker/app-rn-runtime/components/basic/icon/wavicon/wavicon.component";
import { glyphMap as streamlineLightGlyphMap } from "@wavemaker/app-rn-runtime/components/basic/icon/streamline-light-icon/streamline-light-icon.component";
import { glyphMap as streamlineRegularGlyphMap } from "@wavemaker/app-rn-runtime/components/basic/icon/streamline-regular-icon/streamline-regular-icon.component";
import { glyphMap as fontAwesomeIcons } from "../../constants/constant";
import { animationNames } from "../../constants/constant";
import * as Clipboard from 'expo-clipboard';

import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";

const windowWidth = Dimensions.get("window").width;
const iconstyles = {
  text: { fontSize: 24 }
}


const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);

const meta = {
  title: "Basic/Icon",
  component: WmIcon,
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    }
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: '100%' }}>
        <Story />
      </View>
    )
  ],
  argTypes: {
    icons: { table: { disable: true } },
  },
} satisfies Meta<typeof WmIcon>;

export default meta;
type Story = StoryObj<typeof meta>;



const IconLibrary = ({ title, icons, iconClassPrefix }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const filteredIcons = icons.filter((icon) =>
    icon.iconclass
      .replace(iconClassPrefix, "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleIconPress = async (iconClass: string) => {
    try {
      await Clipboard.setStringAsync(iconClass);
      // Toast.success(`${iconClass} copied to clipboard`,"bottom");
      // Alert.alert('Copied!', `${iconClass} copied to clipboard`);
    } catch (err) {
      // Alert.alert('Error', 'Failed to copy to clipboard');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchWrapper}>
        <Text style={styles.libraryTitle}>{title}</Text>
        <View style={styles.searchContainer}>
          <WmIcon
            iconclass="wi wi-search"
            iconsize={20}
            styles={{ root: { color: "#666" } }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search icons..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          {filteredIcons.length > 0 ? (
            <View style={styles.iconGrid}>
              {filteredIcons.map((icon, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.iconContainer}
                  onPress={() => handleIconPress(icon.iconclass)}
                  onPressIn={() => setHoveredIcon(index)}
                  onPressOut={() => setHoveredIcon(null)}
                >
                  <View style={[
                    styles.iconWrapper,
                    hoveredIcon === index && styles.iconWrapperHover
                  ]}>
                    <WmIcon {...icon} />
                  </View>
                  <Text style={styles.iconLabel}>
                    {icon.iconclass.replace(iconClassPrefix, "")}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noResults}>
              No icons found matching "{searchQuery}"
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export const Basic: Story = {
  args: {
    name: "basicIcon",
    caption: "",
    classname: "",
    fontsize: 24,
    iconclass: "wm-sl-l sl-camera",
    iconposition: "left",
    iconsize: 32,
    styles: iconstyles,

  },
  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted"],
      name: 'class'
    },
    iconclass: {
      control: {
        type: "select"
      },
      options: ["fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart",
        "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-balance-scale", "fa fa-bank", "fa fa-bar-chart",],
      name: "icon class"
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
      name: "icon position"
    },
    animation: {
      control: {
        type: 'select'
      },
      options: animationNames
    },
  },
};

export const WithCaption: Story = {
  args: {
    name: "captionIcon",
    caption: "Message",
    classname: "",
    fontsize: 24,
    iconclass: "wi wi-message",
    iconposition: "left",
    iconsize: 24,
    styles: iconstyles,
  },

  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted"],
      name: 'class'
    },
    iconclass: {
      control: {
        type: "select"
      },
      options: ["fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart",
        "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-balance-scale", "fa fa-bank", "fa fa-bar-chart",],
      name: "icon class"
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
      name: "icon position"
    },
    // animation: {
    //   control:{
    //     type:'select'
    //   },
    //   options: animationNames
    // },

  },
};

export const Animations: Story = {
  args: {
    icons: [
      {
        name: "shakeIcon",
        iconclass: "wi wi-info",
        iconsize: 24,
        animation: "shake",
        classname: "text-primary",
      },
      {
        name: "bounceIcon",
        iconclass: "wi wi-tag-faces",
        caption: "Text",
        iconsize: 24,
        animation: "bounce",
        classname: "text-primary",
      },
      {
        name: "delayedFadeInIcon",
        iconclass: "wi wi-3d-rotation ",
        caption: "Delayed Animation",
        iconsize: 24,
        animation: "fadeIn",
        animationdelay: 1000,
        classname: "text-primary",
      },
      {
        name: "fadeInRightIcon",
        iconclass: "wi wi-spinner fa-spin",
        iconsize: 24,
        caption: "Spin Animation",
        classname: "text-primary",
      },
      {
        name: "fadeInRightIcon",
        iconclass: "fa fa-heart fa-pulse",
        iconsize: 24,
        animation: "fadeInRight",
        caption: "Pulse Animation",
        classname: "text-danger",

      },
    ],
  },
  render: ({ icons }) => (
    <View
      style={{
        gap: 16,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
      }}
    >
      {icons.map((icon, index) => (
        <WmIcon key={index} {...icon} />
      ))}
    </View>
  ),
};

export const WaviconLibrary: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icons: Object.keys(waviconGlyphMap).map((icon) => ({
      name: `wavicon-${icon}`,
      iconclass: `wi wi-${icon}`,
      iconsize: 24,
    })),
  },
  render: ({ icons }) => (
    <IconLibrary
      title="Wavicon Library"
      icons={icons}
      iconClassPrefix="wi wi-"
    />
  ),
};

export const StreamlineLightLibrary: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icons: Object.keys(streamlineLightGlyphMap).map((icon) => ({
      name: `streamline-light-${icon}`,
      iconclass: `wm-sl-l sl-${icon}`,
      iconsize: 24,
    })),
  },
  render: ({ icons }) => (
    <IconLibrary
      title="Streamline Light Library"
      icons={icons}
      iconClassPrefix="wm-sl-l sl-"
    />
  ),
};

export const StreamlineRegularLibrary: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icons: Object.keys(streamlineRegularGlyphMap).map((icon) => ({
      name: `streamline-regular-${icon}`,
      iconclass: `wm-sl-r sl-${icon}`,
      iconsize: 24,
    })),
  },
  render: ({ icons }) => (
    <IconLibrary
      title="Streamline Regular Library"
      icons={icons}
      iconClassPrefix="wm-sl-r sl-"
    />
  ),
};

export const FontAwesomeLibrary: Story = {
  parameters: {
    layout: "fullscreen",
    controls: { expanded: false },
  },
  args: {
    icons: fontAwesomeIcons.map((icon) => ({
      name: `fa-${icon}`,
      iconclass: `fa fa-${icon}`,
      iconsize: 24,
    })),
  },
  render: ({ icons }) => (
    <IconLibrary
      title="Font Awesome Library"
      icons={icons}
      iconClassPrefix="fa fa-"
    />
  ),
};





const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  searchWrapper: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    width: "100%",
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 8,
    fontSize: 14,
  },
  contentContainer: {
    width: "100%",
    padding: 16,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
    width: 80,
  },
  iconLabel: {
    fontSize: 10,
    marginTop: 4,
    textAlign: "center",
    color: "#666",
  },
  libraryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  noResults: {
    padding: 16,
    textAlign: "center",
    color: "#666",
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 4,
  },
  iconWrapperHover: {
    backgroundColor: "#f0f0f0",
  },
  appIconShape: {
    padding: 0,
  }
});
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

const windowWidth = Dimensions.get("window").width;
const iconstyles= { 
  text: { fontSize:24  }
}

const meta = {
  title: "Basic/Icon",
  component: WmIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# WmIcon Component

A versatile icon component that supports multiple icon libraries, animations, and various styling options.

## Features
- Multiple icon library support (Wavicon, Streamline Light, Streamline Regular, Font Awesome)
- Icon positioning (left, right)
- Animation support
- Custom styling through class names
- Full accessibility support
- Skeleton loading state
- Custom icon images support

## Props

### Basic Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Unique identifier for the icon component |
| caption | string | '' | Text to display alongside the icon |
| iconclass | string | 'wm-sl-l sl-user' | CSS class for the icon |
| iconposition | string | 'left' | Position of the icon ('left' or 'right') |
| iconsize | number | 0 | Size of the icon |

### Icon Image Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconurl | string | null | URL for a custom icon image |
| iconheight | string | null | Height of the icon |
| iconwidth | string | null | Width of the icon |
| iconmargin | string | null | Margin around the icon |

### Animation Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | Animation type to apply |
| animationdelay | number | null | Delay before animation starts |
| iterationcount | number | undefined | Number of times to repeat the animation |

### Loading State Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| skeletonwidth | string | null | Width of the skeleton loading state |
| skeletonheight | string | null | Height of the skeleton loading state |

### Accessibility Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Label for screen readers |
| accessibilityrole | string | undefined | ARIA role |
| hint | string | undefined | Tooltip text |

## Events
| Event | Parameters | Description |
|-------|------------|-------------|
| onTap | (e: Event, proxy: ComponentProxy) | Triggered when the icon is clicked |

## Styling Classes
Available class names for styling:
- \`text-primary\`
- \`text-secondary\`
- \`text-success\`
- \`text-danger\`
- \`text-warning\`
- \`text-info\`
- \`text-muted\`

## Icon Libraries

### Wavicon
Prefix: \`wi wi-\`
Example: \`wi wi-user\`

### Streamline Light
Prefix: \`wm-sl-l sl-\`
Example: \`wm-sl-l sl-user\`

### Streamline Regular
Prefix: \`wm-sl-r sl-\`
Example: \`wm-sl-r sl-user\`

### Font Awesome
Prefix: \`fa fa-\`
Example: \`fa fa-user\`
        `
      }
    }
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 ,width:'100%'}}>
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
    caption:"",
    classname:"",
    fontsize:24,
    iconclass: "wm-sl-l sl-camera",
    iconposition: "left",
    iconsize: 32,  
    styles:iconstyles,
    
  },
  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info","text-muted"],
      name:'class'
    },
    iconclass:{
      control:{
        type:"select"
      },
      options:[ "fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart", 
        "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-balance-scale", "fa fa-bank", "fa fa-bar-chart",],
      name:"icon class"
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
      name:"icon position"
    },
    animation: {
      control:{
        type:'select'
      },
      options: animationNames
    },
  },
};

export const WithCaption: Story = {
  args: {
    name: "captionIcon",
    caption: "Message",
    classname:"",
    fontsize:24,
    iconclass: "wi wi-message",
    iconposition: "left",
    iconsize: 24,  
    styles:iconstyles,
  },
  
  argTypes: {
    classname: {
      control: {
        type: "select",
      },
      options: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info","text-muted"],
      name:'class'
    },
    iconclass:{
      control:{
        type:"select"
      },
      options:[ "fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart", 
        "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-balance-scale", "fa fa-bank", "fa fa-bar-chart",],
      name:"icon class"
    },
    iconposition: {
      control: { type: "radio" },
      options: ["left", "right"],
      name:"icon position"
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
        classname:"text-primary",
      },
      {
        name: "bounceIcon",
        iconclass: "wi wi-tag-faces",
        caption: "Text",
        iconsize: 24,
        animation: "bounce",
        classname:"text-primary",
      },
      {
        name: "delayedFadeInIcon",
        iconclass: "wi wi-3d-rotation ",
        caption: "Delayed Animation",
        iconsize: 24,
        animation: "fadeIn",
        animationdelay: 1000,
        classname:"text-primary",
      },
      {
        name: "fadeInRightIcon",
        iconclass: "wi wi-spinner fa-spin",
        iconsize: 24,
        caption: "Spin Animation",
        classname:"text-primary",
      },
      {
        name: "fadeInRightIcon",
        iconclass: "fa fa-heart fa-pulse",
        iconsize: 24,
        animation: "fadeInRight",
        caption: "Pulse Animation",
        classname:"text-danger",
        
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
  appIconShape:{
   padding:0,
  }
});
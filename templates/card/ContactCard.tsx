import React from "react";
import WmAnchor from "@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component";
import WmButtongroup from "@wavemaker/app-rn-runtime/components/basic/buttongroup/buttongroup.component";
import WmCard from "@wavemaker/app-rn-runtime/components/data/card/card.component";
import WmCardContent from "@wavemaker/app-rn-runtime/components/data/card/card-content/card-content.component";
import WmCardFooter from "@wavemaker/app-rn-runtime/components/data/card/card-footer/card-footer.component";
import WmContent from "@wavemaker/app-rn-runtime/components/page/content/content.component";
import WmGridcolumn from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component";
import WmGridrow from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmLayoutgrid from "@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component";
import WmList from "@wavemaker/app-rn-runtime/components/data/list/list.component";
import WmListTemplate from "@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component";
import WmPicture from "@wavemaker/app-rn-runtime/components/basic/picture/picture.component";

export const ContactCard = React.memo(({ $item, $index, list, fragment }) => {
  const item = $item;
  const [currentItemWidgets] = React.useState({});
  list.itemWidgets = list.itemWidgets || [];
  list.itemWidgets[$index] = currentItemWidgets;
  const [listener] = React.useState({
    onComponentInit: (c) => {
      currentItemWidgets[c.name] = c;
      // fragment.onComponentInit(c);
    },
    onComponentDestroy: (c) => {
      // fragment.onComponentDestroy(c);
      delete currentItemWidgets[c.name];
    },
  });
  // const { watch } = useWatcher(fragment.watcher);
  return (
    <>
      <WmListTemplate
        layout="media"
        name="listtemplate2"
        id={"list_item_" + $index + "_listtemplate2"}
        classname="list-card-template "
        listener={listener}
      >
        <WmCard
          name="ContactCard"
          id={"repeat_item_" + $index + "_ContactCard"}
          listener={listener}
        >
          <WmCardContent
            name="card_content2"
            id={"repeat_item_" + $index + "_card_content2"}
            styles={{
              root: {
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              },
              text: { textAlign: "center" },
            }}
            listener={listener}
          >
            <WmLayoutgrid
              name="layoutgrid2_1"
              id={"repeat_item_" + $index + "_layoutgrid2_1"}
              listener={listener}
            >
              <WmGridrow
                name="gridrow2_1"
                id={"repeat_item_" + $index + "_gridrow2_1"}
                listener={listener}
              >
                <WmGridcolumn
                  columnwidth={12}
                  name="gridcolumn3_1"
                  id={"repeat_item_" + $index + "_gridcolumn3_1"}
                  styles={{
                    root: {
                      textAlign: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    },
                    text: { textAlign: "center" },
                  }}
                  listener={listener}
                >
                  <WmPicture
                    name="Picture"
                    shape="circle"
                    picturesource="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    id={"repeat_item_" + $index + "_Picture"}
                    pictureplaceholder="resources/images/imagelists/default-image.png"
                    styles={{ root: { width: 100, height: 100 }, text: {} }}
                    listener={listener}
                    resizemode="cover"
                    
                  >

                  </WmPicture>
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow>
                <WmGridcolumn>
                  <WmLabel
                    name="Name"
                    caption="Name"
                    whitespace="nowrap"
                    id={"repeat_item_" + $index + "_Name"}
                    styles={{
                      root: { marginBottom: 12},
                      text: {},
                    }}
                    classname="h4 text-center"
                    listener={listener}
                  ></WmLabel>
                  <WmLabel
                    name="JobTitle"
                    caption="JobTitle"
                    whitespace="nowrap"
                    id={"repeat_item_" + $index + "_JobTitle"}
                    classname="p text-muted  text-center"
                    listener={listener}
                  ></WmLabel>
                </WmGridcolumn>
              </WmGridrow>
            </WmLayoutgrid>
          </WmCardContent>
          <WmCardFooter
            name="card_footer1"
            id={"repeat_item_" + $index + "_card_footer1"}
            styles={{
              root: {
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              },
              text: { textAlign: "center" },
            }}
            listener={listener}
          >
            <WmButtongroup
              name="buttongroup1"
              id={"repeat_item_" + $index + "_buttongroup1"}
              styles={{
                root: {
                  textAlign: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                },
                text: { textAlign: "center" },
              }}
              classname="btn-group-justified"
              listener={listener}
            >
              <WmAnchor
                caption=""
                iconclass="wi wi-mail fa-2x"
                name="anchor3"
                id={"repeat_item_" + $index + "_anchor3"}
                classname="btn btn-transparent"
                listener={listener}
              ></WmAnchor>
              <WmAnchor
                caption=""
                iconclass="wi wi-call fa-2x"
                name="anchor4"
                id={"repeat_item_" + $index + "_anchor4"}
                classname="btn btn-transparent"
                listener={listener}
              ></WmAnchor>
              <WmAnchor
                caption=""
                iconclass="wi wi-location-on fa-2x"
                name="anchor5"
                id={"repeat_item_" + $index + "_anchor5"}
                classname="btn btn-transparent"
                listener={listener}
              ></WmAnchor>
            </WmButtongroup>
          </WmCardFooter>
        </WmCard>
      </WmListTemplate>
    </>
  );
});



import React from "react";
import WmAnchor from '@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component';
import WmAppNavbar from '@wavemaker/app-rn-runtime/components/navigation/appnavbar/appnavbar.component';
import WmCard from '@wavemaker/app-rn-runtime/components/data/card/card.component';
import WmCardContent from '@wavemaker/app-rn-runtime/components/data/card/card-content/card-content.component';
import WmCardFooter from '@wavemaker/app-rn-runtime/components/data/card/card-footer/card-footer.component';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';



export const MediaPost= React.memo(({ $item, $index, list, fragment }) => {
    const item = $item;
    const [currentItemWidgets] = React.useState({});
    list.itemWidgets = list.itemWidgets || [];
    list.itemWidgets[$index] = currentItemWidgets;
    const [listener] = React.useState({
      onComponentInit: c => {
        currentItemWidgets[c.name] = c;
        // fragment.onComponentInit(c);
      },
      onComponentDestroy: c => {
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
          id={'list_item_' + $index + '_listtemplate2'}
          classname="list-card-template "
          listener={listener}>
          <WmContainer
            name="container1"
            id={'repeat_item_' + $index + '_container1'}
            listener={listener}>
            <WmContainer
              name="container2"
              id={'repeat_item_' + $index + '_container2'}
              styles={{ root: { paddingLeft: 4 }, text: {} }}
              classname="media-left"
              listener={listener}>
              <WmPicture
                shape="circle"
                name="Avatar"
                picturesource="https://upload.wikimedia.org/wikipedia/commons/c/c4/WaveMaker_logo.png"
                aspect-ratio="16:9 or 1:1"
                id={'repeat_item_' + $index + '_Avatar'}
                pictureplaceholder="resources/images/imagelists/default-image.png"
                styles={{ root: { height: 100, width: '100%' }, text: {} }}
                listener={listener}></WmPicture>
            </WmContainer>
            <WmContainer
              name="container3"
              id={'repeat_item_' + $index + '_container3'}
              classname="media-body"
              listener={listener}>
              <WmLabel
                caption="Name"
                name="Name"
                whitespace="nowrap"
                id={'repeat_item_' + $index + '_Name'}
                styles={{ root: { marginTop: 0, marginBottom: 0 }, text: {} }}
                classname="h4"
                listener={listener}></WmLabel>
              <WmLabel
                name="Date"
                caption="Date"
                whitespace="nowrap"
                id={'repeat_item_' + $index + '_Date'}
                styles={{ root: { marginTop: 0 }, text: {} }}
                classname="p text-muted"
                listener={listener}></WmLabel>
            </WmContainer>
            <WmCard
              name="Picture"
              picturesource="resources/images/imagelists/default-image.png"
              id={'repeat_item_' + $index + '_Picture'}
              listener={listener}>
              <WmCardContent
                name="card_content1"
                id={'repeat_item_' + $index + '_card_content1'}
                styles={{
                  root: {
                    paddingTop: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                  },
                  text: {},
                }}
                listener={listener}>
                <WmLabel
                  caption="Title"
                  name="Title"
                  fontunit="em"
                  id={'repeat_item_' + $index + '_Title'}
                  styles={{ root: { marginTop: 0 }, text: {} }}
                  classname="h4"
                  listener={listener}></WmLabel>
                <WmLabel
                  name="Description"
                  whitespace="nowrap"
                  caption="Description"
                  id={'repeat_item_' + $index + '_Description'}
                  styles={{ root: { marginBottom: 8 }, text: {} }}
                  classname="p text-muted"
                  listener={listener}></WmLabel>
              </WmCardContent>
              <WmCardFooter
                name="card_footer1"
                id={'repeat_item_' + $index + '_card_footer1'}
                listener={listener}>
                <WmLayoutgrid
                  name="layoutgrid2_1"
                  id={'repeat_item_' + $index + '_layoutgrid2_1'}
                  listener={listener}>
                  <WmGridrow
                    name="gridrow2_1"
                    id={'repeat_item_' + $index + '_gridrow2_1'}
                    listener={listener}>
                    <WmGridcolumn
                      columnwidth={4}
                      name="gridcolumn3_1"
                      id={'repeat_item_' + $index + '_gridcolumn3_1'}
                      classname="col-xs-4"
                      listener={listener}>
                      <WmAnchor
                        caption="READ MORE"
                        name="anchor3"
                        id={'repeat_item_' + $index + '_anchor3'}
                        classname="text-warning"
                        listener={listener}></WmAnchor>
                    </WmGridcolumn>
                    <WmGridcolumn
                      columnwidth={8}
                      name="gridcolumn4"
                      id={'repeat_item_' + $index + '_gridcolumn4'}
                      styles={{
                        root: {
                          textAlign: 'right',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          flexWrap: 'wrap',
                        },
                        text: { textAlign: 'right' },
                      }}
                      classname="col-xs-8"
                      listener={listener}>
                      <WmAnchor
                        iconclass="wi wi-share fa-2x"
                        caption="75"
                        name="anchor4"
                        id={'repeat_item_' + $index + '_anchor4'}
                        styles={{ root: { marginRight: 8 }, text: {} }}
                        classname="btn btn-transparent"
                        listener={listener}></WmAnchor>
                      <WmAnchor
                        iconclass="wi wi-comments fa-2x"
                        caption="50"
                        name="anchor5"
                        id={'repeat_item_' + $index + '_anchor5'}
                        classname="btn btn-transparent"
                        listener={listener}></WmAnchor>
                    </WmGridcolumn>
                  </WmGridrow>
                </WmLayoutgrid>
              </WmCardFooter>
            </WmCard>
          </WmContainer>
        </WmListTemplate>
      </>
    );
  });
import React  from "react";
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

export const NewsPost = React.memo(({ $item, $index, list, fragment }) => {
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
          name="listtemplate2_1"
          id={'list_item_' + $index + '_listtemplate2_1'}
          classname="list-card-template "
          listener={listener}>
          <WmContainer
            name="container4"
            id={'repeat_item_' + $index + '_container4'}
            listener={listener}>
            <WmContainer
              name="container5"
              id={'repeat_item_' + $index + '_container5'}
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
                styles={{ root: { height: 64, width: 200 }, text: {} }}
                listener={listener}></WmPicture>
            </WmContainer>
            <WmContainer
              name="container6"
              id={'repeat_item_' + $index + '_container6'}
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
              name="card2"
              id={'repeat_item_' + $index + '_card2'}
              listener={listener}>
              <WmCardContent
                name="card_content2"
                id={'repeat_item_' + $index + '_card_content2'}
                styles={{
                  root: {
                    paddingTop: 16,
                    paddingRight: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
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
                  caption="Description"
                  id={'repeat_item_' + $index + '_Description'}
                  classname="p"
                  listener={listener}></WmLabel>
              </WmCardContent>
              <WmCardFooter
                name="card_footer2"
                id={'repeat_item_' + $index + '_card_footer2'}
                listener={listener}>
                <WmLayoutgrid
                  name="layoutgrid2"
                  id={'repeat_item_' + $index + '_layoutgrid2'}
                  listener={listener}>
                  <WmGridrow
                    name="gridrow2"
                    id={'repeat_item_' + $index + '_gridrow2'}
                    listener={listener}>
                    <WmGridcolumn
                      columnwidth={4}
                      name="gridcolumn3"
                      id={'repeat_item_' + $index + '_gridcolumn3'}
                      classname="col-xs-4"
                      listener={listener}>
                      <WmAnchor
                        caption="READ MORE"
                        name="anchor4_1"
                        id={'repeat_item_' + $index + '_anchor4_1'}
                        listener={listener}></WmAnchor>
                    </WmGridcolumn>
                    <WmGridcolumn
                      columnwidth={8}
                      name="gridcolumn4_1"
                      id={'repeat_item_' + $index + '_gridcolumn4_1'}
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
                        caption="425"
                        name="anchor5_1"
                        id={'repeat_item_' + $index + '_anchor5_1'}
                        styles={{ root: { marginRight: 8 }, text: {} }}
                        classname="btn btn-transparent"
                        listener={listener}></WmAnchor>
                      <WmAnchor
                        iconclass="wi wi-thumb-up fa-2x"
                        caption="75"
                        name="anchor6"
                        id={'repeat_item_' + $index + '_anchor6'}
                        styles={{ root: { marginRight: 8 }, text: {} }}
                        classname="btn btn-transparent"
                        listener={listener}></WmAnchor>
                      <WmAnchor
                        iconclass="wi wi-comments fa-2x"
                        caption="50"
                        name="anchor7"
                        id={'repeat_item_' + $index + '_anchor7'}
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
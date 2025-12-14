import React from 'react';

import WmAnchor from '@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component';
import WmAppNavbar from '@wavemaker/app-rn-runtime/components/navigation/appnavbar/appnavbar.component';
import WmCard from '@wavemaker/app-rn-runtime/components/data/card/card.component';
import WmCardContent from '@wavemaker/app-rn-runtime/components/data/card/card-content/card-content.component';
import WmCardFooter from '@wavemaker/app-rn-runtime/components/data/card/card-footer/card-footer.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLeftPanel from '@wavemaker/app-rn-runtime/components/page/left-panel/left-panel.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';



export const PersonalSpotlight = React.memo(({ $item, $index, list, fragment }) => {
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
          <WmCard
            name="Picture"
            picturesource="https://media.licdn.com/dms/image/v2/D5610AQG5mQB8Y1Mcsw/image-shrink_800/image-shrink_800/0/1732622493280?e=2147483647&v=beta&t=R9Qq6u1k5NCGUNsYQq670fL4V_GzTzEwOT9KHhadOns"
            aspect-ratio="16:9 or 1:1"
            id={'repeat_item_' + $index + '_Picture'}
            listener={listener}>
            <WmCardContent
              name="card_content2_1"
              id={'repeat_item_' + $index + '_card_content2_1'}
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
                name="Name"
                caption="Name"
                whitespace="nowrap"
                id={'repeat_item_' + $index + '_Name'}
                styles={{ root: { marginTop: 0, width: '100%' }, text: {} }}
                classname="h4 text-muted"
                listener={listener}></WmLabel>
              <WmLabel
                name="Title"
                caption="Title"
                id={'repeat_item_' + $index + '_Title'}
                styles={{ root: { marginTop: 0 }, text: {} }}
                classname="h4"
                listener={listener}></WmLabel>
              <WmLabel
                name="Description"
                caption="Description"
                id={'repeat_item_' + $index + '_Description'}
                styles={{ root: { marginTop: 0 }, text: {} }}
                classname="p text-muted"
                listener={listener}></WmLabel>
              <WmLayoutgrid
                name="layoutgrid2_1"
                id={'repeat_item_' + $index + '_layoutgrid2_1'}
                listener={listener}>
                <WmGridrow
                  name="gridrow2_1"
                  id={'repeat_item_' + $index + '_gridrow2_1'}
                  listener={listener}>
                  <WmGridcolumn
                    columnwidth={6}
                    name="gridcolumn3_1"
                    id={'repeat_item_' + $index + '_gridcolumn3_1'}
                    classname="col-xs-6"
                    listener={listener}>
                    <WmLabel
                      name="Date"
                      caption="Date"
                      fontunit="em"
                      id={'repeat_item_' + $index + '_Date'}
                      styles={{
                        root: { fontSize: 1.143, marginTop: 4.8 },
                        text: { fontSize: 1.143 },
                      }}
                      classname="text-muted"
                      listener={listener}></WmLabel>
                  </WmGridcolumn>
                  <WmGridcolumn
                    columnwidth={6}
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
                    classname="col-xs-6"
                    listener={listener}>
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
            </WmCardContent>
            <WmCardFooter
              name="card_footer2_1"
              id={'repeat_item_' + $index + '_card_footer2_1'}
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}>
              <WmLayoutgrid
                name="layoutgrid3"
                id={'repeat_item_' + $index + '_layoutgrid3'}
                listener={listener}>
                <WmGridrow
                  name="gridrow3"
                  id={'repeat_item_' + $index + '_gridrow3'}
                  listener={listener}>
                  <WmGridcolumn
                    columnwidth={4}
                    name="gridcolumn5"
                    id={'repeat_item_' + $index + '_gridcolumn5'}
                    styles={{
                      root: {
                        textAlign: 'left',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                      },
                      text: { textAlign: 'left' },
                    }}
                    classname="col-xs-4"
                    listener={listener}>
                    <WmAnchor
                      caption="75"
                      iconclass="wi wi-share fa-2x"
                      name="anchor6_1"
                      id={'repeat_item_' + $index + '_anchor6_1'}
                      classname="btn btn-transparent"
                      listener={listener}></WmAnchor>
                  </WmGridcolumn>
                  <WmGridcolumn
                    columnwidth={4}
                    name="gridcolumn6"
                    id={'repeat_item_' + $index + '_gridcolumn6'}
                    styles={{
                      root: {
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="col-xs-4"
                    listener={listener}>
                    <WmAnchor
                      caption="425"
                      iconclass="wi wi-share fa-2x"
                      name="anchor7_1"
                      id={'repeat_item_' + $index + '_anchor7_1'}
                      classname="btn btn-transparent"
                      listener={listener}></WmAnchor>
                  </WmGridcolumn>
                  <WmGridcolumn
                    columnwidth={4}
                    name="gridcolumn7"
                    id={'repeat_item_' + $index + '_gridcolumn7'}
                    styles={{
                      root: {
                        textAlign: 'right',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        flexWrap: 'wrap',
                      },
                      text: { textAlign: 'right' },
                    }}
                    classname="col-xs-4"
                    listener={listener}>
                    <WmAnchor
                      caption="60"
                      iconclass="wi wi-remove-red-eye fa-2x"
                      name="anchor8"
                      id={'repeat_item_' + $index + '_anchor8'}
                      classname="btn btn-transparent"
                      listener={listener}></WmAnchor>
                  </WmGridcolumn>
                </WmGridrow>
              </WmLayoutgrid>
            </WmCardFooter>
          </WmCard>
        </WmListTemplate>
      </>
    );
  });
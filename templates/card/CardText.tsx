import React from "react";
import WmCard from '@wavemaker/app-rn-runtime/components/data/card/card.component';
import WmCardContent from '@wavemaker/app-rn-runtime/components/data/card/card-content/card-content.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmIcon from '@wavemaker/app-rn-runtime/components/basic/icon/icon.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';

export const CardWithText= React.memo(({ $item, $index, list, fragment }) => {
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
          name="listtemplate1"
          id={'list_item_' + $index + '_listtemplate1'}
          classname="list-card-template "
          listener={listener}>
          <WmCard
            name="card1"
            id={'repeat_item_' + $index + '_card1'}
            listener={listener}>
            <WmCardContent
              name="card_content1"
              id={'repeat_item_' + $index + '_card_content1'}
              styles={{
                root: {
                  paddingTop: 24,
                  paddingRight: 24,
                  paddingBottom: 24,
                  paddingLeft: 24,
                },
                text: {},
              }}
              listener={listener}>
              <WmLinearlayout
                direction="column"
                horizontalalign="left"
                verticalalign="center"
                name="linearlayout1"
                id={'repeat_item_' + $index + '_linearlayout1'}
                listener={listener}>
                <WmLinearlayoutitem
                  name="linearlayoutitem1"
                  id={'repeat_item_' + $index + '_linearlayoutitem1'}
                  styles={{ root: { width: '100%' }, text: {} }}
                  listener={listener}>
                  <WmLinearlayout
                    direction="row"
                    spacing="15"
                    verticalalign="center"
                    name="linearlayout2"
                    id={'repeat_item_' + $index + '_linearlayout2'}
                    listener={listener}>
                    <WmLinearlayoutitem
                      flexgrow={1}
                      name="linearlayoutitem2"
                      id={'repeat_item_' + $index + '_linearlayoutitem2'}
                      listener={listener}>
                      <WmLabel
                        name="Title"
                        caption="Title"
                        id={'repeat_item_' + $index + '_Title'}
                        styles={{
                          root: {
                            fontWeight: 'bold',
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          },
                          text: { fontWeight: 'bold' },
                        }}
                        classname="h4"
                        listener={listener}></WmLabel>
                    </WmLinearlayoutitem>
                    <WmLinearlayoutitem
                      name="linearlayoutitem3"
                      id={'repeat_item_' + $index + '_linearlayoutitem3'}
                      marginLeft="15"
                      styles={{ root: { marginLeft: 15, width: 25 }, text: {} }}
                      listener={listener}>
                      <WmIcon
                        iconclass="wi wi-more-vert"
                        iconsize={22}
                        name="icon1"
                        id={'repeat_item_' + $index + '_icon1'}
                        listener={listener}></WmIcon>
                    </WmLinearlayoutitem>
                  </WmLinearlayout>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem4"
                  id={'repeat_item_' + $index + '_linearlayoutitem4'}
                  styles={{ root: { width: '100%' }, text: {} }}
                  listener={listener}>
                  <WmLabel
                    name="SubTitle"
                    caption="SubTitle"
                    id={'repeat_item_' + $index + '_SubTitle'}
                    styles={{
                      root: {
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      },
                      text: {},
                    }}
                    classname="h5"
                    listener={listener}></WmLabel>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem5"
                  id={'repeat_item_' + $index + '_linearlayoutitem5'}
                  styles={{ root: { paddingTop: 18, width: '100%' }, text: {} }}
                  listener={listener}>
                  <WmLabel
                    name="Description_Heading"
                    caption="Description:"
                    id={'repeat_item_' + $index + '_Description_Heading'}
                    styles={{
                      root: {
                        fontWeight: 'bold',
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      },
                      text: { fontWeight: 'bold' },
                    }}
                    classname="h5"
                    listener={listener}></WmLabel>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem6"
                  id={'repeat_item_' + $index + '_linearlayoutitem6'}
                  styles={{ root: { paddingTop: 4, width: '100%' }, text: {} }}
                  listener={listener}>
                  <WmLabel
                    name="Description"
                    caption="Description"
                    id={'repeat_item_' + $index + '_Description'}
                    styles={{
                      root: {
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                      },
                      text: {},
                    }}
                    classname="h5"
                    listener={listener}></WmLabel>
                </WmLinearlayoutitem>
              </WmLinearlayout>
            </WmCardContent>
          </WmCard>
        </WmListTemplate>
      </>
    );
  });

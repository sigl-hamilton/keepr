import React from 'react';
import {
        StyleSheet,
        View,
        StatusBar,
        ActivityIndicator,
        ScrollView,
        AsyncStorage
} from 'react-native';

import { primaryGradientArray } from './utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import uuid from 'uuid/v1';

import Header from './components/Header';
import SubTitle from './components/SubTitle';
import Input from './components/Input';
import List from './components/List';
//import { Buttons } from './components/Buttons';
import { Button as ReactButton } from 'react-native-elements';

const headerTitle = 'KeepR';

class Main extends React.Component {
        state = {
                inputValue: '',
                loadingItems: false,
                allItems: {},
                isCompleted: false
        };

        componentDidMount = () => {
                this.loadingItems();
        };

        newInputValue = value => {
                this.setState({
                        inputValue: value
                });
        };

        loadingItems = async () => {
                try {
                        const allItems = await AsyncStorage.getItem('Todos');
                        this.setState({
                                loadingItems: true,
                                allItems: JSON.parse(allItems) || {}
                        });
                } catch (err) {
                        console.log(err);
                }
        };

        onDoneAddItem = () => {
                const { inputValue } = this.state;
                if (inputValue !== '') {
                        this.setState(prevState => {
                                const id = uuid();
                                const newItemObject = {
                                        [id]: {
                                                id,
                                                isCompleted: false,
                                                text: inputValue,
                                                createdAt: Date.now()
                                        }
                                };
                                const newState = {
                                        ...prevState,
                                        inputValue: '',
                                        allItems: {
                                                ...prevState.allItems,
                                                ...newItemObject
                                        }
                                };
                                this.saveItems(newState.allItems);
                                return { ...newState };
                        });
                }
        };

        deleteItem = id => {
                this.setState(prevState => {
                        const allItems = prevState.allItems;
                        delete allItems[id];
                        const newState = {
                                ...prevState,
                                ...allItems
                        };
                        this.saveItems(newState.allItems);
                        return { ...newState };
                });
        };

        completeItem = id => {
                this.setState(prevState => {
                        const newState = {
                                ...prevState,
                                allItems: {
                                        ...prevState.allItems,
                                        [id]: {
                                                ...prevState.allItems[id],
                                                isCompleted: true
                                        }
                                }
                        };
                        this.saveItems(newState.allItems);
                        return { ...newState };
                });
        };

        incompleteItem = id => {
                this.setState(prevState => {
                        const newState = {
                                ...prevState,
                                allItems: {
                                        ...prevState.allItems,
                                        [id]: {
                                                ...prevState.allItems[id],
                                                isCompleted: false
                                        }
                                }
                        };
                        this.saveItems(newState.allItems);
                        return { ...newState };
                });
        };

        deleteAllItems = async () => {
                try {
                        await AsyncStorage.removeItem('Todos');
                        this.setState({ allItems: {} });
                } catch (err) {
                        console.log(err);
                }
        };

        saveItems = newItem => {
                const saveItem = AsyncStorage.setItem('Todos', JSON.stringify(newItem));
        };

        render() {
                const { inputValue, loadingItems, allItems } = this.state;
                console.log(allItems)

                return (
                        <LinearGradient colors={primaryGradientArray} style={styles.container}>
                                <StatusBar barStyle="light-content" />
                                <View style={[styles.centered, styles.topmargin]}>
                                        <Header title={headerTitle} />
                                </View>
                                <View style={styles.inputContainer}>
                                        <SubTitle subtitle={"Ajouter un objet"} />
                                        <Input
                                                inputValue={inputValue}
                                                onChangeText={this.newInputValue}
                                                onDoneAddItem={this.onDoneAddItem}
                                        />
                                </View>
                                <View style={styles.list}>
                                        <View style={styles.column}>
                                                <SubTitle subtitle={'Liste des objets'} />
                                                <View style={styles.deleteAllButton}>
                                                        <ReactButton title="Supprimer" onPress={this.deleteAllItems} />
                                                </View>
                                        </View>

                                        {loadingItems ? (
                                                <ScrollView contentContainerStyle={styles.scrollableList}>
                                                        {Object.values(allItems)
                                                                .reverse()
                                                                .map(item => (
                                                                        <List
                                                                                key={item.id}
                                                                                // Cette ligne bug mais je ne pense pas que le problème viens d'ici
                                                                                // il marchais avant
                                                                                //{...item}
                                                                                deleteItem={this.deleteItem}
                                                                                completeItem={this.completeItem}
                                                                                incompleteItem={this.incompleteItem}
                                                                        />
                                                                ))}
                                                </ScrollView>
                                        ) : (
                                                        <ActivityIndicator size="large" color="white" />
                                                )}
                                </View>

                                <View style={styles.detection} >
                                        <ReactButton buttonStyle={styles.detectionButton}
                                                title="Scan"
                                                titleStyle={{ fontSize: 21 }}
                                        />
                                </View>

                        </LinearGradient>
                );
        }
}

const styles = StyleSheet.create({
        container: {
                flex: 1
        },
        topmargin: {
                marginTop: 20
        },
        centered: {
                alignItems: 'center'
        },
        inputContainer: {
                marginTop: 40,
                paddingLeft: 15
        },
        list: {
                flex: 1,
                marginTop: 70,
                paddingLeft: 15,
                marginBottom: 10
        },
        scrollableList: {
                marginTop: 15
        },
        column: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
        },
        deleteAllButton: {
                marginRight: 40
        },
        detection: {
                margin: 20,
                alignItems: 'center'
        },
        detectionButton: {
                backgroundColor: "#008d92",
                borderRadius: 6,
                paddingHorizontal: 80,
                paddingVertical: 5
        }
});

export default Main;

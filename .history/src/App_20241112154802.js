import React from 'react';
import { ChakraProvider, Box, HStack, Image, Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, CloseButton, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Center, Tabs, TabList, Tab, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './Calendar'; // Import the Calendar component
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [activeTab, setActiveTab] = useState('home');
  const [modalForm, setModalForm] = useState('');

  const handleOpenModal = (formType) => {
    setModalForm(formType);
    onModalOpen();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Center flexDirection="column">
            <Image 
              src="/images/MM_Concierge_red ER.png" 
              height="auto" 
              objectFit="contain" 
              alt="Homepage" 
              maxW="500px" 
              width="100%"
            />
            <HomePage />
          </Center>
        );
      case 'services':
        return (
          <Center flexDirection="column">
            <Image 
              src="./images/services_available.png" 
              maxW="500px" 
              height="auto" 
              objectFit="contain" 
              alt="Services Available 1" 
              mb={4} 
              width="100%"
            />
            <ServicesAvailable />
          </Center>
        );
      case 'difference':
        return (
          <Center flexDirection="column">
            <Image 
              src="./images/What_makes_MMC_different.png" 
              maxW="500px" 
              height="auto" 
              objectFit="contain" 
              alt="Difference Image 1" 
              mb={4} 
              width="100%"
            />
            <WhatMakesMMCDifferent />
          </Center>
        );
      case 'why':
        return (
          <Center flexDirection="column">
            <Image 
              src="./images/whyIdoThis1.jpg" 
              maxW="500px" 
              height="auto" 
              objectFit="contain" 
              alt="Why I Do This Image 1" 
              mb={4} 
              width="100%"
            />
            <MMCWhyIDoThis />
          </Center>
        );
      default:
        return (
          <Center>
            <Image 
              src="./images/logo2.png" 
              maxW="500px" 
              height="auto" 
              objectFit="contain" 
              alt="Homepage" 
              mb={4} 
              width="100%"
            />
            <HomePage />
          </Center>
        );
    }
  };

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center">
          {/** Header */}
          <Box as="header" p={2} shadow="md" bg="white">
            <HStack spacing={2} align="center" justifyContent="space-between">
              {/* Logo Tab (click to navigate to homepage) */}
              <Link onClick={() => setActiveTab('home')}>
                <Image
                  src="./images/MMConcierge-logo.png"
                  alt="Logo"
                  width={{ base: '150px', md: '200px' }}
                  maxW="500px"
                  height="auto"
                />
              </Link>

              {/* Centered Tab menu */}
              <Spacer />
              <HStack
                display={{ base: 'none', md: 'flex' }}
                justifyContent="center"
                flex="2"
              >
                <Tabs variant="unstyled">
                  <TabList>
                    <Tab
                      _selected={{ color: 'blue.500' }}
                      onClick={() => setActiveTab('services')}
                    >
                      Services available
                    </Tab>
                    <Tab
                      _selected={{ color: 'blue.500' }}
                      onClick={() => setActiveTab('difference')}
                    >
                      What makes us different
                    </Tab>
                    <Tab
                      _selected={{ color: 'blue.500' }}
                      onClick={() => setActiveTab('why')}
                    >
                      Why I do this
                    </Tab>
                  </TabList>
                </Tabs>
              </HStack>

              {/* Right aligned links */}
              <Spacer />
              <HStack display={{ base: 'none', md: 'flex' }}>
                <Button bg="white" onClick={() => handleOpenModal('getStarted')}>
                  Get Started
                </Button>
                <ConnectMenu />
              </HStack>

              {/* Hamburger Menu for small screens */}
              <IconButton
                icon={<HamburgerIcon />}
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                aria-label="Open Menu"
              />
            </HStack>

            {/* Drawer for small screens */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <CloseButton onClick={onClose} />
                </DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4}>
                    <Button onClick={() => handleOpenModal('getStarted')}>Get Started</Button>
                    <ConnectButtons />
                    <Tabs variant="unstyled">
                      <TabList flexDirection="column" alignItems="start">
                        <Tab
                          _selected={{ color: 'blue.500' }}
                          onClick={() => {
                            setActiveTab('services');
                            onClose(); // Close the drawer
                          }}
                        >
                          Services available
                        </Tab>
                        <Tab
                          _selected={{ color: 'blue.500' }}
                          onClick={() => {
                            setActiveTab('difference');
                            onClose(); // Close the drawer
                          }}
                        >
                          What makes us different
                        </Tab>
                        <Tab
                          _selected={{ color: 'blue.500' }}
                          onClick={() => {
                            setActiveTab('why');
                            onClose(); // Close the drawer
                          }}
                        >
                          Why I do this
                        </Tab>
                      </TabList>
                    </Tabs>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          {/* Routes */}
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>

          {/* Modal for Google Forms */}
          <Modal isOpen={isModalOpen} onClose={onModalClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{modalForm === 'getStarted' ? 'Get started' : 'Connect'}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {modalForm === 'getStarted' ? (
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdSILvqzSZIyWXTAtORIGEJUHnQOYkgBMcu0ARxOR4gYS6LrA/viewform?usp=sf_link"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>
                ) : (
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfWZiWt86JjQh0fYDQBQcfs0-mH4Rad2UycsPlTjC2vJMEh1w/viewform?usp=sf_link"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading…
                  </iframe>
                )}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onModalClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;

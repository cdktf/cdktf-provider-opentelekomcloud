# `ctsEventNotificationV3` Submodule <a name="`ctsEventNotificationV3` Submodule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CtsEventNotificationV3 <a name="CtsEventNotificationV3" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3;

CtsEventNotificationV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .notificationName(java.lang.String)
    .operationType(java.lang.String)
//  .filter(CtsEventNotificationV3Filter)
//  .id(java.lang.String)
//  .notifyUserList(IResolvable)
//  .notifyUserList(java.util.List<CtsEventNotificationV3NotifyUserListStruct>)
//  .operations(IResolvable)
//  .operations(java.util.List<CtsEventNotificationV3Operations>)
//  .status(java.lang.String)
//  .topicId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.notificationName">notificationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.operationType">operationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.notifyUserList">notifyUserList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>></code> | notify_user_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `notificationName`<sup>Required</sup> <a name="notificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.notificationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.operationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#filter CtsEventNotificationV3#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifyUserList`<sup>Optional</sup> <a name="notifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.notifyUserList"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>>

notify_user_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.operations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operations CtsEventNotificationV3#operations}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList">putNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList">resetNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter"></a>

```java
public void putFilter(CtsEventNotificationV3Filter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `putNotifyUserList` <a name="putNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList"></a>

```java
public void putNotifyUserList(IResolvable OR java.util.List<CtsEventNotificationV3NotifyUserListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>>

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<CtsEventNotificationV3Operations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId"></a>

```java
public void resetId()
```

##### `resetNotifyUserList` <a name="resetNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList"></a>

```java
public void resetNotifyUserList()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId"></a>

```java
public void resetTopicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3;

CtsEventNotificationV3.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3;

CtsEventNotificationV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3;

CtsEventNotificationV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3;

CtsEventNotificationV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CtsEventNotificationV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CtsEventNotificationV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CtsEventNotificationV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CtsEventNotificationV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime">createTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId">notificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList">notifyUserList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput">notificationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput">notifyUserListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput">operationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName">notificationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType">operationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime"></a>

```java
public java.lang.Number getCreateTime();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter"></a>

```java
public CtsEventNotificationV3FilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a>

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId"></a>

```java
public java.lang.String getNotificationId();
```

- *Type:* java.lang.String

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `notifyUserList`<sup>Required</sup> <a name="notifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList"></a>

```java
public CtsEventNotificationV3NotifyUserListStructList getNotifyUserList();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations"></a>

```java
public CtsEventNotificationV3OperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput"></a>

```java
public CtsEventNotificationV3Filter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationNameInput`<sup>Optional</sup> <a name="notificationNameInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput"></a>

```java
public java.lang.String getNotificationNameInput();
```

- *Type:* java.lang.String

---

##### `notifyUserListInput`<sup>Optional</sup> <a name="notifyUserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput"></a>

```java
public java.lang.Object getNotifyUserListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>>

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput"></a>

```java
public java.lang.String getOperationTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationName`<sup>Required</sup> <a name="notificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName"></a>

```java
public java.lang.String getNotificationName();
```

- *Type:* java.lang.String

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CtsEventNotificationV3Config <a name="CtsEventNotificationV3Config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3Config;

CtsEventNotificationV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .notificationName(java.lang.String)
    .operationType(java.lang.String)
//  .filter(CtsEventNotificationV3Filter)
//  .id(java.lang.String)
//  .notifyUserList(IResolvable)
//  .notifyUserList(java.util.List<CtsEventNotificationV3NotifyUserListStruct>)
//  .operations(IResolvable)
//  .operations(java.util.List<CtsEventNotificationV3Operations>)
//  .status(java.lang.String)
//  .topicId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName">notificationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType">operationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList">notifyUserList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>></code> | notify_user_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `notificationName`<sup>Required</sup> <a name="notificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName"></a>

```java
public java.lang.String getNotificationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter"></a>

```java
public CtsEventNotificationV3Filter getFilter();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#filter CtsEventNotificationV3#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifyUserList`<sup>Optional</sup> <a name="notifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList"></a>

```java
public java.lang.Object getNotifyUserList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>>

notify_user_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#operations CtsEventNotificationV3#operations}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}.

---

### CtsEventNotificationV3Filter <a name="CtsEventNotificationV3Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3Filter;

CtsEventNotificationV3Filter.builder()
    .condition(java.lang.String)
    .rule(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule">rule</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule"></a>

```java
public java.util.List<java.lang.String> getRule();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}.

---

### CtsEventNotificationV3NotifyUserListStruct <a name="CtsEventNotificationV3NotifyUserListStruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3NotifyUserListStruct;

CtsEventNotificationV3NotifyUserListStruct.builder()
    .userGroup(java.lang.String)
    .userList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup">userGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList">userList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}. |

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup"></a>

```java
public java.lang.String getUserGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}.

---

##### `userList`<sup>Required</sup> <a name="userList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList"></a>

```java
public java.util.List<java.lang.String> getUserList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}.

---

### CtsEventNotificationV3Operations <a name="CtsEventNotificationV3Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3Operations;

CtsEventNotificationV3Operations.builder()
    .resourceType(java.lang.String)
    .serviceType(java.lang.String)
    .traceNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames">traceNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}.

---

##### `traceNames`<sup>Required</sup> <a name="traceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames"></a>

```java
public java.util.List<java.lang.String> getTraceNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### CtsEventNotificationV3FilterOutputReference <a name="CtsEventNotificationV3FilterOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3FilterOutputReference;

new CtsEventNotificationV3FilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput">ruleInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule">rule</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput"></a>

```java
public java.util.List<java.lang.String> getRuleInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule"></a>

```java
public java.util.List<java.lang.String> getRule();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue"></a>

```java
public CtsEventNotificationV3Filter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---


### CtsEventNotificationV3NotifyUserListStructList <a name="CtsEventNotificationV3NotifyUserListStructList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3NotifyUserListStructList;

new CtsEventNotificationV3NotifyUserListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get"></a>

```java
public CtsEventNotificationV3NotifyUserListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>>

---


### CtsEventNotificationV3NotifyUserListStructOutputReference <a name="CtsEventNotificationV3NotifyUserListStructOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3NotifyUserListStructOutputReference;

new CtsEventNotificationV3NotifyUserListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput">userListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup">userGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList">userList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput"></a>

```java
public java.lang.String getUserGroupInput();
```

- *Type:* java.lang.String

---

##### `userListInput`<sup>Optional</sup> <a name="userListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput"></a>

```java
public java.util.List<java.lang.String> getUserListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup"></a>

```java
public java.lang.String getUserGroup();
```

- *Type:* java.lang.String

---

##### `userList`<sup>Required</sup> <a name="userList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList"></a>

```java
public java.util.List<java.lang.String> getUserList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>

---


### CtsEventNotificationV3OperationsList <a name="CtsEventNotificationV3OperationsList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3OperationsList;

new CtsEventNotificationV3OperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get"></a>

```java
public CtsEventNotificationV3OperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>>

---


### CtsEventNotificationV3OperationsOutputReference <a name="CtsEventNotificationV3OperationsOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cts_event_notification_v3.CtsEventNotificationV3OperationsOutputReference;

new CtsEventNotificationV3OperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput">traceNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames">traceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `traceNamesInput`<sup>Optional</sup> <a name="traceNamesInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput"></a>

```java
public java.util.List<java.lang.String> getTraceNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `traceNames`<sup>Required</sup> <a name="traceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames"></a>

```java
public java.util.List<java.lang.String> getTraceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>

---




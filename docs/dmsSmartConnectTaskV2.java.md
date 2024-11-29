# `dmsSmartConnectTaskV2` Submodule <a name="`dmsSmartConnectTaskV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsSmartConnectTaskV2 <a name="DmsSmartConnectTaskV2" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2 opentelekomcloud_dms_smart_connect_task_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2;

DmsSmartConnectTaskV2.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
    .taskName(java.lang.String)
//  .destinationTask(DmsSmartConnectTaskV2DestinationTask)
//  .destinationType(java.lang.String)
//  .id(java.lang.String)
//  .sourceTask(DmsSmartConnectTaskV2SourceTask)
//  .sourceType(java.lang.String)
//  .startLater(java.lang.Boolean)
//  .startLater(IResolvable)
//  .timeouts(DmsSmartConnectTaskV2Timeouts)
//  .topics(java.util.List<java.lang.String>)
//  .topicsRegex(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.taskName">taskName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.destinationTask">destinationTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | destination_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.sourceTask">sourceTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | source_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.startLater">startLater</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.topicsRegex">topicsRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.taskName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}.

---

##### `destinationTask`<sup>Optional</sup> <a name="destinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.destinationTask"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

destination_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_task DmsSmartConnectTaskV2#destination_task}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.destinationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceTask`<sup>Optional</sup> <a name="sourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.sourceTask"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

source_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_task DmsSmartConnectTaskV2#source_task}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.sourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}.

---

##### `startLater`<sup>Optional</sup> <a name="startLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.startLater"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#timeouts DmsSmartConnectTaskV2#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.topics"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}.

---

##### `topicsRegex`<sup>Optional</sup> <a name="topicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.topicsRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask">putDestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask">putSourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationTask">resetDestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceTask">resetSourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetStartLater">resetStartLater</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopicsRegex">resetTopicsRegex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationTask` <a name="putDestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask"></a>

```java
public void putDestinationTask(DmsSmartConnectTaskV2DestinationTask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---

##### `putSourceTask` <a name="putSourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask"></a>

```java
public void putSourceTask(DmsSmartConnectTaskV2SourceTask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts"></a>

```java
public void putTimeouts(DmsSmartConnectTaskV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---

##### `resetDestinationTask` <a name="resetDestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationTask"></a>

```java
public void resetDestinationTask()
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetId"></a>

```java
public void resetId()
```

##### `resetSourceTask` <a name="resetSourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceTask"></a>

```java
public void resetSourceTask()
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceType"></a>

```java
public void resetSourceType()
```

##### `resetStartLater` <a name="resetStartLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetStartLater"></a>

```java
public void resetStartLater()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopics"></a>

```java
public void resetTopics()
```

##### `resetTopicsRegex` <a name="resetTopicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopicsRegex"></a>

```java
public void resetTopicsRegex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsSmartConnectTaskV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2;

DmsSmartConnectTaskV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2;

DmsSmartConnectTaskV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2;

DmsSmartConnectTaskV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2;

DmsSmartConnectTaskV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsSmartConnectTaskV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsSmartConnectTaskV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsSmartConnectTaskV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsSmartConnectTaskV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsSmartConnectTaskV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTask">destinationTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference">DmsSmartConnectTaskV2DestinationTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTask">sourceTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference">DmsSmartConnectTaskV2SourceTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference">DmsSmartConnectTaskV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTaskInput">destinationTaskInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTaskInput">sourceTaskInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLaterInput">startLaterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskNameInput">taskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsInput">topicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegexInput">topicsRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLater">startLater</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskName">taskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegex">topicsRegex</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `destinationTask`<sup>Required</sup> <a name="destinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTask"></a>

```java
public DmsSmartConnectTaskV2DestinationTaskOutputReference getDestinationTask();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference">DmsSmartConnectTaskV2DestinationTaskOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceTask`<sup>Required</sup> <a name="sourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTask"></a>

```java
public DmsSmartConnectTaskV2SourceTaskOutputReference getSourceTask();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference">DmsSmartConnectTaskV2SourceTaskOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeouts"></a>

```java
public DmsSmartConnectTaskV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference">DmsSmartConnectTaskV2TimeoutsOutputReference</a>

---

##### `destinationTaskInput`<sup>Optional</sup> <a name="destinationTaskInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTaskInput"></a>

```java
public DmsSmartConnectTaskV2DestinationTask getDestinationTaskInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceTaskInput`<sup>Optional</sup> <a name="sourceTaskInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTaskInput"></a>

```java
public DmsSmartConnectTaskV2SourceTask getSourceTaskInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `startLaterInput`<sup>Optional</sup> <a name="startLaterInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLaterInput"></a>

```java
public java.lang.Object getStartLaterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskNameInput`<sup>Optional</sup> <a name="taskNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskNameInput"></a>

```java
public java.lang.String getTaskNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsInput"></a>

```java
public java.util.List<java.lang.String> getTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsRegexInput`<sup>Optional</sup> <a name="topicsRegexInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegexInput"></a>

```java
public java.lang.String getTopicsRegexInput();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `startLater`<sup>Required</sup> <a name="startLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLater"></a>

```java
public java.lang.Object getStartLater();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsRegex`<sup>Required</sup> <a name="topicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegex"></a>

```java
public java.lang.String getTopicsRegex();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsSmartConnectTaskV2Config <a name="DmsSmartConnectTaskV2Config" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2Config;

DmsSmartConnectTaskV2Config.builder()
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
    .instanceId(java.lang.String)
    .taskName(java.lang.String)
//  .destinationTask(DmsSmartConnectTaskV2DestinationTask)
//  .destinationType(java.lang.String)
//  .id(java.lang.String)
//  .sourceTask(DmsSmartConnectTaskV2SourceTask)
//  .sourceType(java.lang.String)
//  .startLater(java.lang.Boolean)
//  .startLater(IResolvable)
//  .timeouts(DmsSmartConnectTaskV2Timeouts)
//  .topics(java.util.List<java.lang.String>)
//  .topicsRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.taskName">taskName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationTask">destinationTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | destination_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceTask">sourceTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | source_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.startLater">startLater</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topicsRegex">topicsRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}.

---

##### `destinationTask`<sup>Optional</sup> <a name="destinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationTask"></a>

```java
public DmsSmartConnectTaskV2DestinationTask getDestinationTask();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

destination_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_task DmsSmartConnectTaskV2#destination_task}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceTask`<sup>Optional</sup> <a name="sourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceTask"></a>

```java
public DmsSmartConnectTaskV2SourceTask getSourceTask();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

source_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_task DmsSmartConnectTaskV2#source_task}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}.

---

##### `startLater`<sup>Optional</sup> <a name="startLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.startLater"></a>

```java
public java.lang.Object getStartLater();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.timeouts"></a>

```java
public DmsSmartConnectTaskV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#timeouts DmsSmartConnectTaskV2#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}.

---

##### `topicsRegex`<sup>Optional</sup> <a name="topicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topicsRegex"></a>

```java
public java.lang.String getTopicsRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}.

---

### DmsSmartConnectTaskV2DestinationTask <a name="DmsSmartConnectTaskV2DestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2DestinationTask;

DmsSmartConnectTaskV2DestinationTask.builder()
//  .accessKey(java.lang.String)
//  .consumerStrategy(java.lang.String)
//  .deliverTimeInterval(java.lang.Number)
//  .destinationFileType(java.lang.String)
//  .obsBucketName(java.lang.String)
//  .obsPath(java.lang.String)
//  .partitionFormat(java.lang.String)
//  .recordDelimiter(java.lang.String)
//  .secretKey(java.lang.String)
//  .storeKeys(java.lang.Boolean)
//  .storeKeys(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#access_key DmsSmartConnectTaskV2#access_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.consumerStrategy">consumerStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.deliverTimeInterval">deliverTimeInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#deliver_time_interval DmsSmartConnectTaskV2#deliver_time_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.destinationFileType">destinationFileType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_file_type DmsSmartConnectTaskV2#destination_file_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_bucket_name DmsSmartConnectTaskV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsPath">obsPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_path DmsSmartConnectTaskV2#obs_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.partitionFormat">partitionFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#partition_format DmsSmartConnectTaskV2#partition_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#record_delimiter DmsSmartConnectTaskV2#record_delimiter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#secret_key DmsSmartConnectTaskV2#secret_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.storeKeys">storeKeys</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#store_keys DmsSmartConnectTaskV2#store_keys}. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#access_key DmsSmartConnectTaskV2#access_key}.

---

##### `consumerStrategy`<sup>Optional</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.consumerStrategy"></a>

```java
public java.lang.String getConsumerStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}.

---

##### `deliverTimeInterval`<sup>Optional</sup> <a name="deliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.deliverTimeInterval"></a>

```java
public java.lang.Number getDeliverTimeInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#deliver_time_interval DmsSmartConnectTaskV2#deliver_time_interval}.

---

##### `destinationFileType`<sup>Optional</sup> <a name="destinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.destinationFileType"></a>

```java
public java.lang.String getDestinationFileType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_file_type DmsSmartConnectTaskV2#destination_file_type}.

---

##### `obsBucketName`<sup>Optional</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_bucket_name DmsSmartConnectTaskV2#obs_bucket_name}.

---

##### `obsPath`<sup>Optional</sup> <a name="obsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsPath"></a>

```java
public java.lang.String getObsPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_path DmsSmartConnectTaskV2#obs_path}.

---

##### `partitionFormat`<sup>Optional</sup> <a name="partitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.partitionFormat"></a>

```java
public java.lang.String getPartitionFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#partition_format DmsSmartConnectTaskV2#partition_format}.

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#record_delimiter DmsSmartConnectTaskV2#record_delimiter}.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#secret_key DmsSmartConnectTaskV2#secret_key}.

---

##### `storeKeys`<sup>Optional</sup> <a name="storeKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.storeKeys"></a>

```java
public java.lang.Object getStoreKeys();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#store_keys DmsSmartConnectTaskV2#store_keys}.

---

### DmsSmartConnectTaskV2SourceTask <a name="DmsSmartConnectTaskV2SourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2SourceTask;

DmsSmartConnectTaskV2SourceTask.builder()
//  .compressionType(java.lang.String)
//  .consumerStrategy(java.lang.String)
//  .currentInstanceAlias(java.lang.String)
//  .direction(java.lang.String)
//  .password(java.lang.String)
//  .peerInstanceAddress(java.util.List<java.lang.String>)
//  .peerInstanceAlias(java.lang.String)
//  .peerInstanceId(java.lang.String)
//  .provenanceHeaderEnabled(java.lang.Boolean)
//  .provenanceHeaderEnabled(IResolvable)
//  .renameTopicEnabled(java.lang.Boolean)
//  .renameTopicEnabled(IResolvable)
//  .replicationFactor(java.lang.Number)
//  .saslMechanism(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .syncConsumerOffsetsEnabled(java.lang.Boolean)
//  .syncConsumerOffsetsEnabled(IResolvable)
//  .taskNum(java.lang.Number)
//  .topicsMapping(java.util.List<java.lang.String>)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#compression_type DmsSmartConnectTaskV2#compression_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.consumerStrategy">consumerStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.currentInstanceAlias">currentInstanceAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#current_instance_alias DmsSmartConnectTaskV2#current_instance_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#direction DmsSmartConnectTaskV2#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#password DmsSmartConnectTaskV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAddress">peerInstanceAddress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_address DmsSmartConnectTaskV2#peer_instance_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAlias">peerInstanceAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_alias DmsSmartConnectTaskV2#peer_instance_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceId">peerInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_id DmsSmartConnectTaskV2#peer_instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.provenanceHeaderEnabled">provenanceHeaderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#provenance_header_enabled DmsSmartConnectTaskV2#provenance_header_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.renameTopicEnabled">renameTopicEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#rename_topic_enabled DmsSmartConnectTaskV2#rename_topic_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#replication_factor DmsSmartConnectTaskV2#replication_factor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sasl_mechanism DmsSmartConnectTaskV2#sasl_mechanism}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#security_protocol DmsSmartConnectTaskV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.syncConsumerOffsetsEnabled">syncConsumerOffsetsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sync_consumer_offsets_enabled DmsSmartConnectTaskV2#sync_consumer_offsets_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.taskNum">taskNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_num DmsSmartConnectTaskV2#task_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.topicsMapping">topicsMapping</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_mapping DmsSmartConnectTaskV2#topics_mapping}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#user_name DmsSmartConnectTaskV2#user_name}. |

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#compression_type DmsSmartConnectTaskV2#compression_type}.

---

##### `consumerStrategy`<sup>Optional</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.consumerStrategy"></a>

```java
public java.lang.String getConsumerStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}.

---

##### `currentInstanceAlias`<sup>Optional</sup> <a name="currentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.currentInstanceAlias"></a>

```java
public java.lang.String getCurrentInstanceAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#current_instance_alias DmsSmartConnectTaskV2#current_instance_alias}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#direction DmsSmartConnectTaskV2#direction}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#password DmsSmartConnectTaskV2#password}.

---

##### `peerInstanceAddress`<sup>Optional</sup> <a name="peerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAddress"></a>

```java
public java.util.List<java.lang.String> getPeerInstanceAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_address DmsSmartConnectTaskV2#peer_instance_address}.

---

##### `peerInstanceAlias`<sup>Optional</sup> <a name="peerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAlias"></a>

```java
public java.lang.String getPeerInstanceAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_alias DmsSmartConnectTaskV2#peer_instance_alias}.

---

##### `peerInstanceId`<sup>Optional</sup> <a name="peerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceId"></a>

```java
public java.lang.String getPeerInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_id DmsSmartConnectTaskV2#peer_instance_id}.

---

##### `provenanceHeaderEnabled`<sup>Optional</sup> <a name="provenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.provenanceHeaderEnabled"></a>

```java
public java.lang.Object getProvenanceHeaderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#provenance_header_enabled DmsSmartConnectTaskV2#provenance_header_enabled}.

---

##### `renameTopicEnabled`<sup>Optional</sup> <a name="renameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.renameTopicEnabled"></a>

```java
public java.lang.Object getRenameTopicEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#rename_topic_enabled DmsSmartConnectTaskV2#rename_topic_enabled}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#replication_factor DmsSmartConnectTaskV2#replication_factor}.

---

##### `saslMechanism`<sup>Optional</sup> <a name="saslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sasl_mechanism DmsSmartConnectTaskV2#sasl_mechanism}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#security_protocol DmsSmartConnectTaskV2#security_protocol}.

---

##### `syncConsumerOffsetsEnabled`<sup>Optional</sup> <a name="syncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.syncConsumerOffsetsEnabled"></a>

```java
public java.lang.Object getSyncConsumerOffsetsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sync_consumer_offsets_enabled DmsSmartConnectTaskV2#sync_consumer_offsets_enabled}.

---

##### `taskNum`<sup>Optional</sup> <a name="taskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.taskNum"></a>

```java
public java.lang.Number getTaskNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_num DmsSmartConnectTaskV2#task_num}.

---

##### `topicsMapping`<sup>Optional</sup> <a name="topicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.topicsMapping"></a>

```java
public java.util.List<java.lang.String> getTopicsMapping();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_mapping DmsSmartConnectTaskV2#topics_mapping}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#user_name DmsSmartConnectTaskV2#user_name}.

---

### DmsSmartConnectTaskV2Timeouts <a name="DmsSmartConnectTaskV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2Timeouts;

DmsSmartConnectTaskV2Timeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#create DmsSmartConnectTaskV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#create DmsSmartConnectTaskV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsSmartConnectTaskV2DestinationTaskOutputReference <a name="DmsSmartConnectTaskV2DestinationTaskOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2DestinationTaskOutputReference;

new DmsSmartConnectTaskV2DestinationTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetConsumerStrategy">resetConsumerStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDeliverTimeInterval">resetDeliverTimeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDestinationFileType">resetDestinationFileType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsBucketName">resetObsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsPath">resetObsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetPartitionFormat">resetPartitionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetStoreKeys">resetStoreKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetConsumerStrategy` <a name="resetConsumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetConsumerStrategy"></a>

```java
public void resetConsumerStrategy()
```

##### `resetDeliverTimeInterval` <a name="resetDeliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDeliverTimeInterval"></a>

```java
public void resetDeliverTimeInterval()
```

##### `resetDestinationFileType` <a name="resetDestinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDestinationFileType"></a>

```java
public void resetDestinationFileType()
```

##### `resetObsBucketName` <a name="resetObsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsBucketName"></a>

```java
public void resetObsBucketName()
```

##### `resetObsPath` <a name="resetObsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsPath"></a>

```java
public void resetObsPath()
```

##### `resetPartitionFormat` <a name="resetPartitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetPartitionFormat"></a>

```java
public void resetPartitionFormat()
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetRecordDelimiter"></a>

```java
public void resetRecordDelimiter()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetStoreKeys` <a name="resetStoreKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetStoreKeys"></a>

```java
public void resetStoreKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategyInput">consumerStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeIntervalInput">deliverTimeIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileTypeInput">destinationFileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketNameInput">obsBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPathInput">obsPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormatInput">partitionFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeysInput">storeKeysInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategy">consumerStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeInterval">deliverTimeInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileType">destinationFileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPath">obsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormat">partitionFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeys">storeKeys</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `consumerStrategyInput`<sup>Optional</sup> <a name="consumerStrategyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategyInput"></a>

```java
public java.lang.String getConsumerStrategyInput();
```

- *Type:* java.lang.String

---

##### `deliverTimeIntervalInput`<sup>Optional</sup> <a name="deliverTimeIntervalInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeIntervalInput"></a>

```java
public java.lang.Number getDeliverTimeIntervalInput();
```

- *Type:* java.lang.Number

---

##### `destinationFileTypeInput`<sup>Optional</sup> <a name="destinationFileTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileTypeInput"></a>

```java
public java.lang.String getDestinationFileTypeInput();
```

- *Type:* java.lang.String

---

##### `obsBucketNameInput`<sup>Optional</sup> <a name="obsBucketNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketNameInput"></a>

```java
public java.lang.String getObsBucketNameInput();
```

- *Type:* java.lang.String

---

##### `obsPathInput`<sup>Optional</sup> <a name="obsPathInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPathInput"></a>

```java
public java.lang.String getObsPathInput();
```

- *Type:* java.lang.String

---

##### `partitionFormatInput`<sup>Optional</sup> <a name="partitionFormatInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormatInput"></a>

```java
public java.lang.String getPartitionFormatInput();
```

- *Type:* java.lang.String

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiterInput"></a>

```java
public java.lang.String getRecordDelimiterInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `storeKeysInput`<sup>Optional</sup> <a name="storeKeysInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeysInput"></a>

```java
public java.lang.Object getStoreKeysInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `consumerStrategy`<sup>Required</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategy"></a>

```java
public java.lang.String getConsumerStrategy();
```

- *Type:* java.lang.String

---

##### `deliverTimeInterval`<sup>Required</sup> <a name="deliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeInterval"></a>

```java
public java.lang.Number getDeliverTimeInterval();
```

- *Type:* java.lang.Number

---

##### `destinationFileType`<sup>Required</sup> <a name="destinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileType"></a>

```java
public java.lang.String getDestinationFileType();
```

- *Type:* java.lang.String

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

---

##### `obsPath`<sup>Required</sup> <a name="obsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPath"></a>

```java
public java.lang.String getObsPath();
```

- *Type:* java.lang.String

---

##### `partitionFormat`<sup>Required</sup> <a name="partitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormat"></a>

```java
public java.lang.String getPartitionFormat();
```

- *Type:* java.lang.String

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `storeKeys`<sup>Required</sup> <a name="storeKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeys"></a>

```java
public java.lang.Object getStoreKeys();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.internalValue"></a>

```java
public DmsSmartConnectTaskV2DestinationTask getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---


### DmsSmartConnectTaskV2SourceTaskOutputReference <a name="DmsSmartConnectTaskV2SourceTaskOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2SourceTaskOutputReference;

new DmsSmartConnectTaskV2SourceTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetConsumerStrategy">resetConsumerStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCurrentInstanceAlias">resetCurrentInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAddress">resetPeerInstanceAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAlias">resetPeerInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceId">resetPeerInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetProvenanceHeaderEnabled">resetProvenanceHeaderEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetRenameTopicEnabled">resetRenameTopicEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSaslMechanism">resetSaslMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSyncConsumerOffsetsEnabled">resetSyncConsumerOffsetsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTaskNum">resetTaskNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTopicsMapping">resetTopicsMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCompressionType"></a>

```java
public void resetCompressionType()
```

##### `resetConsumerStrategy` <a name="resetConsumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetConsumerStrategy"></a>

```java
public void resetConsumerStrategy()
```

##### `resetCurrentInstanceAlias` <a name="resetCurrentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCurrentInstanceAlias"></a>

```java
public void resetCurrentInstanceAlias()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPeerInstanceAddress` <a name="resetPeerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAddress"></a>

```java
public void resetPeerInstanceAddress()
```

##### `resetPeerInstanceAlias` <a name="resetPeerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAlias"></a>

```java
public void resetPeerInstanceAlias()
```

##### `resetPeerInstanceId` <a name="resetPeerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceId"></a>

```java
public void resetPeerInstanceId()
```

##### `resetProvenanceHeaderEnabled` <a name="resetProvenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetProvenanceHeaderEnabled"></a>

```java
public void resetProvenanceHeaderEnabled()
```

##### `resetRenameTopicEnabled` <a name="resetRenameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetRenameTopicEnabled"></a>

```java
public void resetRenameTopicEnabled()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

##### `resetSaslMechanism` <a name="resetSaslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSaslMechanism"></a>

```java
public void resetSaslMechanism()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSyncConsumerOffsetsEnabled` <a name="resetSyncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSyncConsumerOffsetsEnabled"></a>

```java
public void resetSyncConsumerOffsetsEnabled()
```

##### `resetTaskNum` <a name="resetTaskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTaskNum"></a>

```java
public void resetTaskNum()
```

##### `resetTopicsMapping` <a name="resetTopicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTopicsMapping"></a>

```java
public void resetTopicsMapping()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategyInput">consumerStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAliasInput">currentInstanceAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddressInput">peerInstanceAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAliasInput">peerInstanceAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceIdInput">peerInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabledInput">provenanceHeaderEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabledInput">renameTopicEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanismInput">saslMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabledInput">syncConsumerOffsetsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNumInput">taskNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMappingInput">topicsMappingInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionType">compressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategy">consumerStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAlias">currentInstanceAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddress">peerInstanceAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAlias">peerInstanceAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceId">peerInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabled">provenanceHeaderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabled">renameTopicEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabled">syncConsumerOffsetsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNum">taskNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMapping">topicsMapping</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionTypeInput"></a>

```java
public java.lang.String getCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `consumerStrategyInput`<sup>Optional</sup> <a name="consumerStrategyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategyInput"></a>

```java
public java.lang.String getConsumerStrategyInput();
```

- *Type:* java.lang.String

---

##### `currentInstanceAliasInput`<sup>Optional</sup> <a name="currentInstanceAliasInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAliasInput"></a>

```java
public java.lang.String getCurrentInstanceAliasInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `peerInstanceAddressInput`<sup>Optional</sup> <a name="peerInstanceAddressInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddressInput"></a>

```java
public java.util.List<java.lang.String> getPeerInstanceAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerInstanceAliasInput`<sup>Optional</sup> <a name="peerInstanceAliasInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAliasInput"></a>

```java
public java.lang.String getPeerInstanceAliasInput();
```

- *Type:* java.lang.String

---

##### `peerInstanceIdInput`<sup>Optional</sup> <a name="peerInstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceIdInput"></a>

```java
public java.lang.String getPeerInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `provenanceHeaderEnabledInput`<sup>Optional</sup> <a name="provenanceHeaderEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabledInput"></a>

```java
public java.lang.Object getProvenanceHeaderEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renameTopicEnabledInput`<sup>Optional</sup> <a name="renameTopicEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabledInput"></a>

```java
public java.lang.Object getRenameTopicEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `saslMechanismInput`<sup>Optional</sup> <a name="saslMechanismInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanismInput"></a>

```java
public java.lang.String getSaslMechanismInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `syncConsumerOffsetsEnabledInput`<sup>Optional</sup> <a name="syncConsumerOffsetsEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabledInput"></a>

```java
public java.lang.Object getSyncConsumerOffsetsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskNumInput`<sup>Optional</sup> <a name="taskNumInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNumInput"></a>

```java
public java.lang.Number getTaskNumInput();
```

- *Type:* java.lang.Number

---

##### `topicsMappingInput`<sup>Optional</sup> <a name="topicsMappingInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMappingInput"></a>

```java
public java.util.List<java.lang.String> getTopicsMappingInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionType"></a>

```java
public java.lang.String getCompressionType();
```

- *Type:* java.lang.String

---

##### `consumerStrategy`<sup>Required</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategy"></a>

```java
public java.lang.String getConsumerStrategy();
```

- *Type:* java.lang.String

---

##### `currentInstanceAlias`<sup>Required</sup> <a name="currentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAlias"></a>

```java
public java.lang.String getCurrentInstanceAlias();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `peerInstanceAddress`<sup>Required</sup> <a name="peerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddress"></a>

```java
public java.util.List<java.lang.String> getPeerInstanceAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerInstanceAlias`<sup>Required</sup> <a name="peerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAlias"></a>

```java
public java.lang.String getPeerInstanceAlias();
```

- *Type:* java.lang.String

---

##### `peerInstanceId`<sup>Required</sup> <a name="peerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceId"></a>

```java
public java.lang.String getPeerInstanceId();
```

- *Type:* java.lang.String

---

##### `provenanceHeaderEnabled`<sup>Required</sup> <a name="provenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabled"></a>

```java
public java.lang.Object getProvenanceHeaderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renameTopicEnabled`<sup>Required</sup> <a name="renameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabled"></a>

```java
public java.lang.Object getRenameTopicEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `saslMechanism`<sup>Required</sup> <a name="saslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `syncConsumerOffsetsEnabled`<sup>Required</sup> <a name="syncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabled"></a>

```java
public java.lang.Object getSyncConsumerOffsetsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `taskNum`<sup>Required</sup> <a name="taskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNum"></a>

```java
public java.lang.Number getTaskNum();
```

- *Type:* java.lang.Number

---

##### `topicsMapping`<sup>Required</sup> <a name="topicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMapping"></a>

```java
public java.util.List<java.lang.String> getTopicsMapping();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.internalValue"></a>

```java
public DmsSmartConnectTaskV2SourceTask getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---


### DmsSmartConnectTaskV2TimeoutsOutputReference <a name="DmsSmartConnectTaskV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_smart_connect_task_v2.DmsSmartConnectTaskV2TimeoutsOutputReference;

new DmsSmartConnectTaskV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---




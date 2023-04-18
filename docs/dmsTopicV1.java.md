# `opentelekomcloud_dms_topic_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dms_topic_v1`](https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1).

# `dmsTopicV1` Submodule <a name="`dmsTopicV1` Submodule" id="@cdktf/provider-opentelekomcloud.dmsTopicV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsTopicV1 <a name="DmsTopicV1" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1 opentelekomcloud_dms_topic_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_topic_v1.DmsTopicV1;

DmsTopicV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .maxPartitions(java.lang.Number)
//  .partition(java.lang.Number)
//  .remainPartitions(java.lang.Number)
//  .replication(java.lang.Number)
//  .retentionTime(java.lang.Number)
//  .size(java.lang.Number)
//  .syncMessageFlush(java.lang.Boolean)
//  .syncMessageFlush(IResolvable)
//  .syncReplication(java.lang.Boolean)
//  .syncReplication(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#instance_id DmsTopicV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#name DmsTopicV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#id DmsTopicV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.maxPartitions">maxPartitions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.partition">partition</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#partition DmsTopicV1#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.remainPartitions">remainPartitions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.replication">replication</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#replication DmsTopicV1#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#retention_time DmsTopicV1#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#size DmsTopicV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncMessageFlush">syncMessageFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncReplication">syncReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#instance_id DmsTopicV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#name DmsTopicV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#id DmsTopicV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxPartitions`<sup>Optional</sup> <a name="maxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.maxPartitions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.partition"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#partition DmsTopicV1#partition}.

---

##### `remainPartitions`<sup>Optional</sup> <a name="remainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.remainPartitions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}.

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.replication"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#replication DmsTopicV1#replication}.

---

##### `retentionTime`<sup>Optional</sup> <a name="retentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.retentionTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#retention_time DmsTopicV1#retention_time}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#size DmsTopicV1#size}.

---

##### `syncMessageFlush`<sup>Optional</sup> <a name="syncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncMessageFlush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}.

---

##### `syncReplication`<sup>Optional</sup> <a name="syncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.Initializer.parameter.syncReplication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetMaxPartitions">resetMaxPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRemainPartitions">resetRemainPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRetentionTime">resetRetentionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncMessageFlush">resetSyncMessageFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncReplication">resetSyncReplication</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetId"></a>

```java
public void resetId()
```

##### `resetMaxPartitions` <a name="resetMaxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetMaxPartitions"></a>

```java
public void resetMaxPartitions()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRemainPartitions` <a name="resetRemainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRemainPartitions"></a>

```java
public void resetRemainPartitions()
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetReplication"></a>

```java
public void resetReplication()
```

##### `resetRetentionTime` <a name="resetRetentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetRetentionTime"></a>

```java
public void resetRetentionTime()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSize"></a>

```java
public void resetSize()
```

##### `resetSyncMessageFlush` <a name="resetSyncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncMessageFlush"></a>

```java
public void resetSyncMessageFlush()
```

##### `resetSyncReplication` <a name="resetSyncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.resetSyncReplication"></a>

```java
public void resetSyncReplication()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_topic_v1.DmsTopicV1;

DmsTopicV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_topic_v1.DmsTopicV1;

DmsTopicV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_topic_v1.DmsTopicV1;

DmsTopicV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitionsInput">maxPartitionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitionsInput">remainPartitionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replicationInput">replicationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTimeInput">retentionTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlushInput">syncMessageFlushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplicationInput">syncReplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitions">maxPartitions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitions">remainPartitions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replication">replication</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlush">syncMessageFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplication">syncReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `maxPartitionsInput`<sup>Optional</sup> <a name="maxPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitionsInput"></a>

```java
public java.lang.Number getMaxPartitionsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `remainPartitionsInput`<sup>Optional</sup> <a name="remainPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitionsInput"></a>

```java
public java.lang.Number getRemainPartitionsInput();
```

- *Type:* java.lang.Number

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replicationInput"></a>

```java
public java.lang.Number getReplicationInput();
```

- *Type:* java.lang.Number

---

##### `retentionTimeInput`<sup>Optional</sup> <a name="retentionTimeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTimeInput"></a>

```java
public java.lang.Number getRetentionTimeInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `syncMessageFlushInput`<sup>Optional</sup> <a name="syncMessageFlushInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlushInput"></a>

```java
public java.lang.Object getSyncMessageFlushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncReplicationInput`<sup>Optional</sup> <a name="syncReplicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplicationInput"></a>

```java
public java.lang.Object getSyncReplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `maxPartitions`<sup>Required</sup> <a name="maxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.maxPartitions"></a>

```java
public java.lang.Number getMaxPartitions();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `remainPartitions`<sup>Required</sup> <a name="remainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.remainPartitions"></a>

```java
public java.lang.Number getRemainPartitions();
```

- *Type:* java.lang.Number

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.replication"></a>

```java
public java.lang.Number getReplication();
```

- *Type:* java.lang.Number

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `syncMessageFlush`<sup>Required</sup> <a name="syncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncMessageFlush"></a>

```java
public java.lang.Object getSyncMessageFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `syncReplication`<sup>Required</sup> <a name="syncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.syncReplication"></a>

```java
public java.lang.Object getSyncReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsTopicV1Config <a name="DmsTopicV1Config" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_topic_v1.DmsTopicV1Config;

DmsTopicV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .maxPartitions(java.lang.Number)
//  .partition(java.lang.Number)
//  .remainPartitions(java.lang.Number)
//  .replication(java.lang.Number)
//  .retentionTime(java.lang.Number)
//  .size(java.lang.Number)
//  .syncMessageFlush(java.lang.Boolean)
//  .syncMessageFlush(IResolvable)
//  .syncReplication(java.lang.Boolean)
//  .syncReplication(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#instance_id DmsTopicV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#name DmsTopicV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#id DmsTopicV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.maxPartitions">maxPartitions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.partition">partition</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#partition DmsTopicV1#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.remainPartitions">remainPartitions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.replication">replication</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#replication DmsTopicV1#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#retention_time DmsTopicV1#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#size DmsTopicV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncMessageFlush">syncMessageFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncReplication">syncReplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#instance_id DmsTopicV1#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#name DmsTopicV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#id DmsTopicV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxPartitions`<sup>Optional</sup> <a name="maxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.maxPartitions"></a>

```java
public java.lang.Number getMaxPartitions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#max_partitions DmsTopicV1#max_partitions}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#partition DmsTopicV1#partition}.

---

##### `remainPartitions`<sup>Optional</sup> <a name="remainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.remainPartitions"></a>

```java
public java.lang.Number getRemainPartitions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#remain_partitions DmsTopicV1#remain_partitions}.

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.replication"></a>

```java
public java.lang.Number getReplication();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#replication DmsTopicV1#replication}.

---

##### `retentionTime`<sup>Optional</sup> <a name="retentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#retention_time DmsTopicV1#retention_time}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#size DmsTopicV1#size}.

---

##### `syncMessageFlush`<sup>Optional</sup> <a name="syncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncMessageFlush"></a>

```java
public java.lang.Object getSyncMessageFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_message_flush DmsTopicV1#sync_message_flush}.

---

##### `syncReplication`<sup>Optional</sup> <a name="syncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV1.DmsTopicV1Config.property.syncReplication"></a>

```java
public java.lang.Object getSyncReplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_topic_v1#sync_replication DmsTopicV1#sync_replication}.

---




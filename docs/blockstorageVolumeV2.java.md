# `opentelekomcloud_blockstorage_volume_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_blockstorage_volume_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2).

# `blockstorageVolumeV2` Submodule <a name="`blockstorageVolumeV2` Submodule" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeV2 <a name="BlockstorageVolumeV2" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2 opentelekomcloud_blockstorage_volume_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2;

BlockstorageVolumeV2.Builder.create(Construct scope, java.lang.String id)
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
    .size(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .cascade(java.lang.Boolean)
//  .cascade(IResolvable)
//  .consistencyGroupId(java.lang.String)
//  .description(java.lang.String)
//  .deviceType(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceReplica(java.lang.String)
//  .sourceVolId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BlockstorageVolumeV2Timeouts)
//  .volumeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.cascade">cascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.consistencyGroupId">consistencyGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.deviceType">deviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.sourceReplica">sourceReplica</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.sourceVolId">sourceVolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}.

---

##### `cascade`<sup>Optional</sup> <a name="cascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.cascade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}.

---

##### `consistencyGroupId`<sup>Optional</sup> <a name="consistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.consistencyGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.deviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}.

---

##### `sourceReplica`<sup>Optional</sup> <a name="sourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.sourceReplica"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}.

---

##### `sourceVolId`<sup>Optional</sup> <a name="sourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.sourceVolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#timeouts BlockstorageVolumeV2#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.volumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetCascade">resetCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId">resetConsistencyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica">resetSourceReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId">resetSourceVolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts"></a>

```java
public void putTimeouts(BlockstorageVolumeV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetCascade` <a name="resetCascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetCascade"></a>

```java
public void resetCascade()
```

##### `resetConsistencyGroupId` <a name="resetConsistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId"></a>

```java
public void resetConsistencyGroupId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDeviceType"></a>

```java
public void resetDeviceType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetSourceReplica` <a name="resetSourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica"></a>

```java
public void resetSourceReplica()
```

##### `resetSourceVolId` <a name="resetSourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId"></a>

```java
public void resetSourceVolId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType"></a>

```java
public void resetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2;

BlockstorageVolumeV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2;

BlockstorageVolumeV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2;

BlockstorageVolumeV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment">attachment</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.wwn">wwn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascadeInput">cascadeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput">consistencyGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceTypeInput">deviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput">sourceReplicaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput">sourceVolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascade">cascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId">consistencyGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica">sourceReplica</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId">sourceVolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment"></a>

```java
public BlockstorageVolumeV2AttachmentList getAttachment();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts"></a>

```java
public BlockstorageVolumeV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a>

---

##### `wwn`<sup>Required</sup> <a name="wwn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.wwn"></a>

```java
public java.lang.String getWwn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `cascadeInput`<sup>Optional</sup> <a name="cascadeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascadeInput"></a>

```java
public java.lang.Object getCascadeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consistencyGroupIdInput`<sup>Optional</sup> <a name="consistencyGroupIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput"></a>

```java
public java.lang.String getConsistencyGroupIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceTypeInput"></a>

```java
public java.lang.String getDeviceTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `sourceReplicaInput`<sup>Optional</sup> <a name="sourceReplicaInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput"></a>

```java
public java.lang.String getSourceReplicaInput();
```

- *Type:* java.lang.String

---

##### `sourceVolIdInput`<sup>Optional</sup> <a name="sourceVolIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput"></a>

```java
public java.lang.String getSourceVolIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `cascade`<sup>Required</sup> <a name="cascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascade"></a>

```java
public java.lang.Object getCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consistencyGroupId`<sup>Required</sup> <a name="consistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId"></a>

```java
public java.lang.String getConsistencyGroupId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `sourceReplica`<sup>Required</sup> <a name="sourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica"></a>

```java
public java.lang.String getSourceReplica();
```

- *Type:* java.lang.String

---

##### `sourceVolId`<sup>Required</sup> <a name="sourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId"></a>

```java
public java.lang.String getSourceVolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeV2Attachment <a name="BlockstorageVolumeV2Attachment" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2Attachment;

BlockstorageVolumeV2Attachment.builder()
    .build();
```


### BlockstorageVolumeV2Config <a name="BlockstorageVolumeV2Config" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2Config;

BlockstorageVolumeV2Config.builder()
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
    .size(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .cascade(java.lang.Boolean)
//  .cascade(IResolvable)
//  .consistencyGroupId(java.lang.String)
//  .description(java.lang.String)
//  .deviceType(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceReplica(java.lang.String)
//  .sourceVolId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BlockstorageVolumeV2Timeouts)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.cascade">cascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId">consistencyGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica">sourceReplica</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId">sourceVolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}.

---

##### `cascade`<sup>Optional</sup> <a name="cascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.cascade"></a>

```java
public java.lang.Object getCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}.

---

##### `consistencyGroupId`<sup>Optional</sup> <a name="consistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId"></a>

```java
public java.lang.String getConsistencyGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}.

---

##### `sourceReplica`<sup>Optional</sup> <a name="sourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica"></a>

```java
public java.lang.String getSourceReplica();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}.

---

##### `sourceVolId`<sup>Optional</sup> <a name="sourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId"></a>

```java
public java.lang.String getSourceVolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts"></a>

```java
public BlockstorageVolumeV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#timeouts BlockstorageVolumeV2#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}.

---

### BlockstorageVolumeV2Timeouts <a name="BlockstorageVolumeV2Timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2Timeouts;

BlockstorageVolumeV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#create BlockstorageVolumeV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#create BlockstorageVolumeV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeV2AttachmentList <a name="BlockstorageVolumeV2AttachmentList" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2AttachmentList;

new BlockstorageVolumeV2AttachmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get"></a>

```java
public BlockstorageVolumeV2AttachmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BlockstorageVolumeV2AttachmentOutputReference <a name="BlockstorageVolumeV2AttachmentOutputReference" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2AttachmentOutputReference;

new BlockstorageVolumeV2AttachmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device">device</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue"></a>

```java
public BlockstorageVolumeV2Attachment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a>

---


### BlockstorageVolumeV2TimeoutsOutputReference <a name="BlockstorageVolumeV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.blockstorage_volume_v2.BlockstorageVolumeV2TimeoutsOutputReference;

new BlockstorageVolumeV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---




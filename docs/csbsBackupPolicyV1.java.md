# `csbsBackupPolicyV1` Submodule <a name="`csbsBackupPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsbsBackupPolicyV1 <a name="CsbsBackupPolicyV1" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1;

CsbsBackupPolicyV1.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resource(IResolvable)
    .resource(java.util.List<CsbsBackupPolicyV1Resource>)
    .scheduledOperation(CsbsBackupPolicyV1ScheduledOperation)
//  .common(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .providerId(java.lang.String)
//  .region(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<CsbsBackupPolicyV1Tags>)
//  .timeouts(CsbsBackupPolicyV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.resource">resource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>></code> | resource block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scheduledOperation">scheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | scheduled_operation block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.common">common</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.resource"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#resource CsbsBackupPolicyV1#resource}

---

##### `scheduledOperation`<sup>Required</sup> <a name="scheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scheduledOperation"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

scheduled_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#scheduled_operation CsbsBackupPolicyV1#scheduled_operation}

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.common"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerId`<sup>Optional</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#tags CsbsBackupPolicyV1#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#timeouts CsbsBackupPolicyV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation">putScheduledOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetCommon">resetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetProviderId">resetProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putResource` <a name="putResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource"></a>

```java
public void putResource(IResolvable OR java.util.List<CsbsBackupPolicyV1Resource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>>

---

##### `putScheduledOperation` <a name="putScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation"></a>

```java
public void putScheduledOperation(CsbsBackupPolicyV1ScheduledOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<CsbsBackupPolicyV1Tags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts"></a>

```java
public void putTimeouts(CsbsBackupPolicyV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

---

##### `resetCommon` <a name="resetCommon" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetCommon"></a>

```java
public void resetCommon()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetId"></a>

```java
public void resetId()
```

##### `resetProviderId` <a name="resetProviderId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetProviderId"></a>

```java
public void resetProviderId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsbsBackupPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1;

CsbsBackupPolicyV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1;

CsbsBackupPolicyV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1;

CsbsBackupPolicyV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1;

CsbsBackupPolicyV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CsbsBackupPolicyV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CsbsBackupPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CsbsBackupPolicyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CsbsBackupPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CsbsBackupPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList">CsbsBackupPolicyV1ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperation">scheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference">CsbsBackupPolicyV1ScheduledOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList">CsbsBackupPolicyV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference">CsbsBackupPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.commonInput">commonInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resourceInput">resourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperationInput">scheduledOperationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.common">common</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resource"></a>

```java
public CsbsBackupPolicyV1ResourceList getResource();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList">CsbsBackupPolicyV1ResourceList</a>

---

##### `scheduledOperation`<sup>Required</sup> <a name="scheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperation"></a>

```java
public CsbsBackupPolicyV1ScheduledOperationOutputReference getScheduledOperation();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference">CsbsBackupPolicyV1ScheduledOperationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tags"></a>

```java
public CsbsBackupPolicyV1TagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList">CsbsBackupPolicyV1TagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeouts"></a>

```java
public CsbsBackupPolicyV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference">CsbsBackupPolicyV1TimeoutsOutputReference</a>

---

##### `commonInput`<sup>Optional</sup> <a name="commonInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.commonInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommonInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resourceInput"></a>

```java
public java.lang.Object getResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>>

---

##### `scheduledOperationInput`<sup>Optional</sup> <a name="scheduledOperationInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperationInput"></a>

```java
public CsbsBackupPolicyV1ScheduledOperation getScheduledOperationInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.common"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommon();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CsbsBackupPolicyV1Config <a name="CsbsBackupPolicyV1Config" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1Config;

CsbsBackupPolicyV1Config.builder()
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
    .name(java.lang.String)
    .resource(IResolvable)
    .resource(java.util.List<CsbsBackupPolicyV1Resource>)
    .scheduledOperation(CsbsBackupPolicyV1ScheduledOperation)
//  .common(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .providerId(java.lang.String)
//  .region(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<CsbsBackupPolicyV1Tags>)
//  .timeouts(CsbsBackupPolicyV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.resource">resource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>></code> | resource block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.scheduledOperation">scheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | scheduled_operation block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.common">common</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.providerId">providerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.resource"></a>

```java
public java.lang.Object getResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#resource CsbsBackupPolicyV1#resource}

---

##### `scheduledOperation`<sup>Required</sup> <a name="scheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.scheduledOperation"></a>

```java
public CsbsBackupPolicyV1ScheduledOperation getScheduledOperation();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

scheduled_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#scheduled_operation CsbsBackupPolicyV1#scheduled_operation}

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.common"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCommon();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerId`<sup>Optional</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#tags CsbsBackupPolicyV1#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.timeouts"></a>

```java
public CsbsBackupPolicyV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#timeouts CsbsBackupPolicyV1#timeouts}

---

### CsbsBackupPolicyV1Resource <a name="CsbsBackupPolicyV1Resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1Resource;

CsbsBackupPolicyV1Resource.builder()
    .id(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#type CsbsBackupPolicyV1#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#type CsbsBackupPolicyV1#type}.

---

### CsbsBackupPolicyV1ScheduledOperation <a name="CsbsBackupPolicyV1ScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1ScheduledOperation;

CsbsBackupPolicyV1ScheduledOperation.builder()
    .operationType(java.lang.String)
    .triggerPattern(java.lang.String)
//  .dayBackups(java.lang.Number)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .maxBackups(java.lang.Number)
//  .monthBackups(java.lang.Number)
//  .name(java.lang.String)
//  .permanent(java.lang.Boolean)
//  .permanent(IResolvable)
//  .retentionDurationDays(java.lang.Number)
//  .timezone(java.lang.String)
//  .weekBackups(java.lang.Number)
//  .yearBackups(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.operationType">operationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#operation_type CsbsBackupPolicyV1#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.triggerPattern">triggerPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.dayBackups">dayBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#day_backups CsbsBackupPolicyV1#day_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#enabled CsbsBackupPolicyV1#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.maxBackups">maxBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#max_backups CsbsBackupPolicyV1#max_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.monthBackups">monthBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#month_backups CsbsBackupPolicyV1#month_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.permanent">permanent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#permanent CsbsBackupPolicyV1#permanent}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#timezone CsbsBackupPolicyV1#timezone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.weekBackups">weekBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#week_backups CsbsBackupPolicyV1#week_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.yearBackups">yearBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#year_backups CsbsBackupPolicyV1#year_backups}. |

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#operation_type CsbsBackupPolicyV1#operation_type}.

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.triggerPattern"></a>

```java
public java.lang.String getTriggerPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}.

---

##### `dayBackups`<sup>Optional</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.dayBackups"></a>

```java
public java.lang.Number getDayBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#day_backups CsbsBackupPolicyV1#day_backups}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#enabled CsbsBackupPolicyV1#enabled}.

---

##### `maxBackups`<sup>Optional</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.maxBackups"></a>

```java
public java.lang.Number getMaxBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#max_backups CsbsBackupPolicyV1#max_backups}.

---

##### `monthBackups`<sup>Optional</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.monthBackups"></a>

```java
public java.lang.Number getMonthBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#month_backups CsbsBackupPolicyV1#month_backups}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `permanent`<sup>Optional</sup> <a name="permanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.permanent"></a>

```java
public java.lang.Object getPermanent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#permanent CsbsBackupPolicyV1#permanent}.

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#timezone CsbsBackupPolicyV1#timezone}.

---

##### `weekBackups`<sup>Optional</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.weekBackups"></a>

```java
public java.lang.Number getWeekBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#week_backups CsbsBackupPolicyV1#week_backups}.

---

##### `yearBackups`<sup>Optional</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.yearBackups"></a>

```java
public java.lang.Number getYearBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#year_backups CsbsBackupPolicyV1#year_backups}.

---

### CsbsBackupPolicyV1Tags <a name="CsbsBackupPolicyV1Tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1Tags;

CsbsBackupPolicyV1Tags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#key CsbsBackupPolicyV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#value CsbsBackupPolicyV1#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#key CsbsBackupPolicyV1#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#value CsbsBackupPolicyV1#value}.

---

### CsbsBackupPolicyV1Timeouts <a name="CsbsBackupPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1Timeouts;

CsbsBackupPolicyV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#create CsbsBackupPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#delete CsbsBackupPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#create CsbsBackupPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/csbs_backup_policy_v1#delete CsbsBackupPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CsbsBackupPolicyV1ResourceList <a name="CsbsBackupPolicyV1ResourceList" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1ResourceList;

new CsbsBackupPolicyV1ResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get"></a>

```java
public CsbsBackupPolicyV1ResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>>

---


### CsbsBackupPolicyV1ResourceOutputReference <a name="CsbsBackupPolicyV1ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1ResourceOutputReference;

new CsbsBackupPolicyV1ResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource">CsbsBackupPolicyV1Resource</a>

---


### CsbsBackupPolicyV1ScheduledOperationOutputReference <a name="CsbsBackupPolicyV1ScheduledOperationOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1ScheduledOperationOutputReference;

new CsbsBackupPolicyV1ScheduledOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDayBackups">resetDayBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMaxBackups">resetMaxBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMonthBackups">resetMonthBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetPermanent">resetPermanent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetWeekBackups">resetWeekBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetYearBackups">resetYearBackups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayBackups` <a name="resetDayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDayBackups"></a>

```java
public void resetDayBackups()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxBackups` <a name="resetMaxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMaxBackups"></a>

```java
public void resetMaxBackups()
```

##### `resetMonthBackups` <a name="resetMonthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMonthBackups"></a>

```java
public void resetMonthBackups()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPermanent` <a name="resetPermanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetPermanent"></a>

```java
public void resetPermanent()
```

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetRetentionDurationDays"></a>

```java
public void resetRetentionDurationDays()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetWeekBackups` <a name="resetWeekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetWeekBackups"></a>

```java
public void resetWeekBackups()
```

##### `resetYearBackups` <a name="resetYearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetYearBackups"></a>

```java
public void resetYearBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName">triggerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackupsInput">dayBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackupsInput">maxBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackupsInput">monthBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationTypeInput">operationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanentInput">permanentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPatternInput">triggerPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackupsInput">weekBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackupsInput">yearBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackups">dayBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups">maxBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackups">monthBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType">operationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent">permanent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern">triggerPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackups">weekBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackups">yearBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName"></a>

```java
public java.lang.String getTriggerName();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

---

##### `dayBackupsInput`<sup>Optional</sup> <a name="dayBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackupsInput"></a>

```java
public java.lang.Number getDayBackupsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxBackupsInput`<sup>Optional</sup> <a name="maxBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackupsInput"></a>

```java
public java.lang.Number getMaxBackupsInput();
```

- *Type:* java.lang.Number

---

##### `monthBackupsInput`<sup>Optional</sup> <a name="monthBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackupsInput"></a>

```java
public java.lang.Number getMonthBackupsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationTypeInput"></a>

```java
public java.lang.String getOperationTypeInput();
```

- *Type:* java.lang.String

---

##### `permanentInput`<sup>Optional</sup> <a name="permanentInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanentInput"></a>

```java
public java.lang.Object getPermanentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDaysInput"></a>

```java
public java.lang.Number getRetentionDurationDaysInput();
```

- *Type:* java.lang.Number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `triggerPatternInput`<sup>Optional</sup> <a name="triggerPatternInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPatternInput"></a>

```java
public java.lang.String getTriggerPatternInput();
```

- *Type:* java.lang.String

---

##### `weekBackupsInput`<sup>Optional</sup> <a name="weekBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackupsInput"></a>

```java
public java.lang.Number getWeekBackupsInput();
```

- *Type:* java.lang.Number

---

##### `yearBackupsInput`<sup>Optional</sup> <a name="yearBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackupsInput"></a>

```java
public java.lang.Number getYearBackupsInput();
```

- *Type:* java.lang.Number

---

##### `dayBackups`<sup>Required</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackups"></a>

```java
public java.lang.Number getDayBackups();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxBackups`<sup>Required</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups"></a>

```java
public java.lang.Number getMaxBackups();
```

- *Type:* java.lang.Number

---

##### `monthBackups`<sup>Required</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackups"></a>

```java
public java.lang.Number getMonthBackups();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

---

##### `permanent`<sup>Required</sup> <a name="permanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent"></a>

```java
public java.lang.Object getPermanent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern"></a>

```java
public java.lang.String getTriggerPattern();
```

- *Type:* java.lang.String

---

##### `weekBackups`<sup>Required</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackups"></a>

```java
public java.lang.Number getWeekBackups();
```

- *Type:* java.lang.Number

---

##### `yearBackups`<sup>Required</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackups"></a>

```java
public java.lang.Number getYearBackups();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue"></a>

```java
public CsbsBackupPolicyV1ScheduledOperation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---


### CsbsBackupPolicyV1TagsList <a name="CsbsBackupPolicyV1TagsList" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1TagsList;

new CsbsBackupPolicyV1TagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get"></a>

```java
public CsbsBackupPolicyV1TagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>>

---


### CsbsBackupPolicyV1TagsOutputReference <a name="CsbsBackupPolicyV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1TagsOutputReference;

new CsbsBackupPolicyV1TagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags">CsbsBackupPolicyV1Tags</a>

---


### CsbsBackupPolicyV1TimeoutsOutputReference <a name="CsbsBackupPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.csbs_backup_policy_v1.CsbsBackupPolicyV1TimeoutsOutputReference;

new CsbsBackupPolicyV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

---




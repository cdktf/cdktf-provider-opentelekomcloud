# `opentelekomcloud_cbr_vault_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_cbr_vault_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3).

# `cbrVaultV3` Submodule <a name="`cbrVaultV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrVaultV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrVaultV3 <a name="CbrVaultV3" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3;

CbrVaultV3.Builder.create(Construct scope, java.lang.String id)
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
    .billing(CbrVaultV3Billing)
    .name(java.lang.String)
//  .autoBind(java.lang.Boolean)
//  .autoBind(IResolvable)
//  .autoExpand(java.lang.Boolean)
//  .autoExpand(IResolvable)
//  .backupPolicyId(java.lang.String)
//  .bindRules(IResolvable)
//  .bindRules(java.util.List<CbrVaultV3BindRules>)
//  .description(java.lang.String)
//  .enterpriseProjectId(java.lang.String)
//  .id(java.lang.String)
//  .resource(IResolvable)
//  .resource(java.util.List<CbrVaultV3Resource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoBind">autoBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoExpand">autoExpand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.bindRules">bindRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>></code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.resource">resource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.billing"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `autoBind`<sup>Optional</sup> <a name="autoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoBind"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `autoExpand`<sup>Optional</sup> <a name="autoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.autoExpand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `backupPolicyId`<sup>Optional</sup> <a name="backupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.backupPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `bindRules`<sup>Optional</sup> <a name="bindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.bindRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>>

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.resource"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules">putBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind">resetAutoBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand">resetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId">resetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules">resetBindRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBilling` <a name="putBilling" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling"></a>

```java
public void putBilling(CbrVaultV3Billing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `putBindRules` <a name="putBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules"></a>

```java
public void putBindRules(IResolvable OR java.util.List<CbrVaultV3BindRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putBindRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>>

---

##### `putResource` <a name="putResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource"></a>

```java
public void putResource(IResolvable OR java.util.List<CbrVaultV3Resource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.putResource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>>

---

##### `resetAutoBind` <a name="resetAutoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoBind"></a>

```java
public void resetAutoBind()
```

##### `resetAutoExpand` <a name="resetAutoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetAutoExpand"></a>

```java
public void resetAutoExpand()
```

##### `resetBackupPolicyId` <a name="resetBackupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBackupPolicyId"></a>

```java
public void resetBackupPolicyId()
```

##### `resetBindRules` <a name="resetBindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetBindRules"></a>

```java
public void resetBindRules()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetEnterpriseProjectId"></a>

```java
public void resetEnterpriseProjectId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetId"></a>

```java
public void resetId()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetResource"></a>

```java
public void resetResource()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3;

CbrVaultV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3;

CbrVaultV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3;

CbrVaultV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules">bindRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput">autoBindInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput">autoExpandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput">billingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput">bindRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput">resourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind">autoBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand">autoExpand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billing"></a>

```java
public CbrVaultV3BillingOutputReference getBilling();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference">CbrVaultV3BillingOutputReference</a>

---

##### `bindRules`<sup>Required</sup> <a name="bindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRules"></a>

```java
public CbrVaultV3BindRulesList getBindRules();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList">CbrVaultV3BindRulesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resource"></a>

```java
public CbrVaultV3ResourceList getResource();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList">CbrVaultV3ResourceList</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `autoBindInput`<sup>Optional</sup> <a name="autoBindInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBindInput"></a>

```java
public java.lang.Object getAutoBindInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoExpandInput`<sup>Optional</sup> <a name="autoExpandInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpandInput"></a>

```java
public java.lang.Object getAutoExpandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyIdInput"></a>

```java
public java.lang.String getBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.billingInput"></a>

```java
public CbrVaultV3Billing getBillingInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---

##### `bindRulesInput`<sup>Optional</sup> <a name="bindRulesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.bindRulesInput"></a>

```java
public java.lang.Object getBindRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectIdInput"></a>

```java
public java.lang.String getEnterpriseProjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.resourceInput"></a>

```java
public java.lang.Object getResourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoBind`<sup>Required</sup> <a name="autoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoBind"></a>

```java
public java.lang.Object getAutoBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoExpand`<sup>Required</sup> <a name="autoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.autoExpand"></a>

```java
public java.lang.Object getAutoExpand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CbrVaultV3Billing <a name="CbrVaultV3Billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3Billing;

CbrVaultV3Billing.builder()
    .objectType(java.lang.String)
    .protectType(java.lang.String)
    .size(java.lang.Number)
//  .chargingMode(java.lang.String)
//  .cloudType(java.lang.String)
//  .consistentLevel(java.lang.String)
//  .consoleUrl(java.lang.String)
//  .extraInfo(java.util.Map<java.lang.String, java.lang.String>)
//  .isAutoPay(java.lang.Boolean)
//  .isAutoPay(IResolvable)
//  .isAutoRenew(java.lang.Boolean)
//  .isAutoRenew(IResolvable)
//  .periodNum(java.lang.Number)
//  .periodType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType">protectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode">chargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType">cloudType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel">consistentLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo">extraInfo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay">isAutoPay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew">isAutoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum">periodNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType">periodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}. |

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}.

---

##### `protectType`<sup>Required</sup> <a name="protectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.protectType"></a>

```java
public java.lang.String getProtectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `chargingMode`<sup>Optional</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.chargingMode"></a>

```java
public java.lang.String getChargingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}.

---

##### `cloudType`<sup>Optional</sup> <a name="cloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.cloudType"></a>

```java
public java.lang.String getCloudType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}.

---

##### `consistentLevel`<sup>Optional</sup> <a name="consistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consistentLevel"></a>

```java
public java.lang.String getConsistentLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}.

---

##### `consoleUrl`<sup>Optional</sup> <a name="consoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}.

---

##### `extraInfo`<sup>Optional</sup> <a name="extraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.extraInfo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}.

---

##### `isAutoPay`<sup>Optional</sup> <a name="isAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoPay"></a>

```java
public java.lang.Object getIsAutoPay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}.

---

##### `isAutoRenew`<sup>Optional</sup> <a name="isAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.isAutoRenew"></a>

```java
public java.lang.Object getIsAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}.

---

##### `periodNum`<sup>Optional</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodNum"></a>

```java
public java.lang.Number getPeriodNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}.

---

##### `periodType`<sup>Optional</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}.

---

### CbrVaultV3BindRules <a name="CbrVaultV3BindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3BindRules;

CbrVaultV3BindRules.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#key CbrVaultV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#value CbrVaultV3#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#key CbrVaultV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#value CbrVaultV3#value}.

---

### CbrVaultV3Config <a name="CbrVaultV3Config" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3Config;

CbrVaultV3Config.builder()
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
    .billing(CbrVaultV3Billing)
    .name(java.lang.String)
//  .autoBind(java.lang.Boolean)
//  .autoBind(IResolvable)
//  .autoExpand(java.lang.Boolean)
//  .autoExpand(IResolvable)
//  .backupPolicyId(java.lang.String)
//  .bindRules(IResolvable)
//  .bindRules(java.util.List<CbrVaultV3BindRules>)
//  .description(java.lang.String)
//  .enterpriseProjectId(java.lang.String)
//  .id(java.lang.String)
//  .resource(IResolvable)
//  .resource(java.util.List<CbrVaultV3Resource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | billing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind">autoBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand">autoExpand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules">bindRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>></code> | bind_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#description CbrVaultV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource">resource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.billing"></a>

```java
public CbrVaultV3Billing getBilling();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `autoBind`<sup>Optional</sup> <a name="autoBind" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoBind"></a>

```java
public java.lang.Object getAutoBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}.

---

##### `autoExpand`<sup>Optional</sup> <a name="autoExpand" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.autoExpand"></a>

```java
public java.lang.Object getAutoExpand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}.

---

##### `backupPolicyId`<sup>Optional</sup> <a name="backupPolicyId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}.

---

##### `bindRules`<sup>Optional</sup> <a name="bindRules" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.bindRules"></a>

```java
public java.lang.Object getBindRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>>

bind_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#description CbrVaultV3#description}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.resource"></a>

```java
public java.lang.Object getResource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}.

---

### CbrVaultV3Resource <a name="CbrVaultV3Resource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3Resource;

CbrVaultV3Resource.builder()
//  .backupCount(java.lang.Number)
//  .backupSize(java.lang.Number)
//  .excludeVolumes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .includeVolumes(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .protectStatus(java.lang.String)
//  .size(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount">backupCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize">backupSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes">excludeVolumes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes">includeVolumes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#size CbrVaultV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#type CbrVaultV3#type}. |

---

##### `backupCount`<sup>Optional</sup> <a name="backupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupCount"></a>

```java
public java.lang.Number getBackupCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}.

---

##### `backupSize`<sup>Optional</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.backupSize"></a>

```java
public java.lang.Number getBackupSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}.

---

##### `excludeVolumes`<sup>Optional</sup> <a name="excludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.excludeVolumes"></a>

```java
public java.util.List<java.lang.String> getExcludeVolumes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#id CbrVaultV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeVolumes`<sup>Optional</sup> <a name="includeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.includeVolumes"></a>

```java
public java.util.List<java.lang.String> getIncludeVolumes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#name CbrVaultV3#name}.

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#size CbrVaultV3#size}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/cbr_vault_v3#type CbrVaultV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrVaultV3BillingOutputReference <a name="CbrVaultV3BillingOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3BillingOutputReference;

new CbrVaultV3BillingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode">resetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType">resetCloudType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel">resetConsistentLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl">resetConsoleUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo">resetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay">resetIsAutoPay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew">resetIsAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum">resetPeriodNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType">resetPeriodType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChargingMode` <a name="resetChargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetChargingMode"></a>

```java
public void resetChargingMode()
```

##### `resetCloudType` <a name="resetCloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetCloudType"></a>

```java
public void resetCloudType()
```

##### `resetConsistentLevel` <a name="resetConsistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsistentLevel"></a>

```java
public void resetConsistentLevel()
```

##### `resetConsoleUrl` <a name="resetConsoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetConsoleUrl"></a>

```java
public void resetConsoleUrl()
```

##### `resetExtraInfo` <a name="resetExtraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetExtraInfo"></a>

```java
public void resetExtraInfo()
```

##### `resetIsAutoPay` <a name="resetIsAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoPay"></a>

```java
public void resetIsAutoPay()
```

##### `resetIsAutoRenew` <a name="resetIsAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetIsAutoRenew"></a>

```java
public void resetIsAutoRenew()
```

##### `resetPeriodNum` <a name="resetPeriodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodNum"></a>

```java
public void resetPeriodNum()
```

##### `resetPeriodType` <a name="resetPeriodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.resetPeriodType"></a>

```java
public void resetPeriodType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated">allocated</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene">frozenScene</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode">specCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit">storageUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used">used</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput">chargingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput">cloudTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput">consistentLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput">consoleUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput">extraInfoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput">isAutoPayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput">isAutoRenewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput">periodNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput">periodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput">protectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode">chargingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType">cloudType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel">consistentLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo">extraInfo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay">isAutoPay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew">isAutoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum">periodNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType">periodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType">protectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocated`<sup>Required</sup> <a name="allocated" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.allocated"></a>

```java
public java.lang.Number getAllocated();
```

- *Type:* java.lang.Number

---

##### `frozenScene`<sup>Required</sup> <a name="frozenScene" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.frozenScene"></a>

```java
public java.lang.String getFrozenScene();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `specCode`<sup>Required</sup> <a name="specCode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.specCode"></a>

```java
public java.lang.String getSpecCode();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageUnit`<sup>Required</sup> <a name="storageUnit" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.storageUnit"></a>

```java
public java.lang.String getStorageUnit();
```

- *Type:* java.lang.String

---

##### `used`<sup>Required</sup> <a name="used" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.used"></a>

```java
public java.lang.Number getUsed();
```

- *Type:* java.lang.Number

---

##### `chargingModeInput`<sup>Optional</sup> <a name="chargingModeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingModeInput"></a>

```java
public java.lang.String getChargingModeInput();
```

- *Type:* java.lang.String

---

##### `cloudTypeInput`<sup>Optional</sup> <a name="cloudTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudTypeInput"></a>

```java
public java.lang.String getCloudTypeInput();
```

- *Type:* java.lang.String

---

##### `consistentLevelInput`<sup>Optional</sup> <a name="consistentLevelInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevelInput"></a>

```java
public java.lang.String getConsistentLevelInput();
```

- *Type:* java.lang.String

---

##### `consoleUrlInput`<sup>Optional</sup> <a name="consoleUrlInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrlInput"></a>

```java
public java.lang.String getConsoleUrlInput();
```

- *Type:* java.lang.String

---

##### `extraInfoInput`<sup>Optional</sup> <a name="extraInfoInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isAutoPayInput`<sup>Optional</sup> <a name="isAutoPayInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPayInput"></a>

```java
public java.lang.Object getIsAutoPayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoRenewInput`<sup>Optional</sup> <a name="isAutoRenewInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenewInput"></a>

```java
public java.lang.Object getIsAutoRenewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `periodNumInput`<sup>Optional</sup> <a name="periodNumInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNumInput"></a>

```java
public java.lang.Number getPeriodNumInput();
```

- *Type:* java.lang.Number

---

##### `periodTypeInput`<sup>Optional</sup> <a name="periodTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodTypeInput"></a>

```java
public java.lang.String getPeriodTypeInput();
```

- *Type:* java.lang.String

---

##### `protectTypeInput`<sup>Optional</sup> <a name="protectTypeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectTypeInput"></a>

```java
public java.lang.String getProtectTypeInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.chargingMode"></a>

```java
public java.lang.String getChargingMode();
```

- *Type:* java.lang.String

---

##### `cloudType`<sup>Required</sup> <a name="cloudType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.cloudType"></a>

```java
public java.lang.String getCloudType();
```

- *Type:* java.lang.String

---

##### `consistentLevel`<sup>Required</sup> <a name="consistentLevel" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consistentLevel"></a>

```java
public java.lang.String getConsistentLevel();
```

- *Type:* java.lang.String

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `extraInfo`<sup>Required</sup> <a name="extraInfo" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.extraInfo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isAutoPay`<sup>Required</sup> <a name="isAutoPay" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoPay"></a>

```java
public java.lang.Object getIsAutoPay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isAutoRenew`<sup>Required</sup> <a name="isAutoRenew" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.isAutoRenew"></a>

```java
public java.lang.Object getIsAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `periodNum`<sup>Required</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodNum"></a>

```java
public java.lang.Number getPeriodNum();
```

- *Type:* java.lang.Number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

---

##### `protectType`<sup>Required</sup> <a name="protectType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.protectType"></a>

```java
public java.lang.String getProtectType();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BillingOutputReference.property.internalValue"></a>

```java
public CbrVaultV3Billing getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Billing">CbrVaultV3Billing</a>

---


### CbrVaultV3BindRulesList <a name="CbrVaultV3BindRulesList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3BindRulesList;

new CbrVaultV3BindRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get"></a>

```java
public CbrVaultV3BindRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>>

---


### CbrVaultV3BindRulesOutputReference <a name="CbrVaultV3BindRulesOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3BindRulesOutputReference;

new CbrVaultV3BindRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3BindRules">CbrVaultV3BindRules</a>

---


### CbrVaultV3ResourceList <a name="CbrVaultV3ResourceList" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3ResourceList;

new CbrVaultV3ResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get"></a>

```java
public CbrVaultV3ResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>>

---


### CbrVaultV3ResourceOutputReference <a name="CbrVaultV3ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_vault_v3.CbrVaultV3ResourceOutputReference;

new CbrVaultV3ResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount">resetBackupCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize">resetBackupSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes">resetExcludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes">resetIncludeVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupCount` <a name="resetBackupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupCount"></a>

```java
public void resetBackupCount()
```

##### `resetBackupSize` <a name="resetBackupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetBackupSize"></a>

```java
public void resetBackupSize()
```

##### `resetExcludeVolumes` <a name="resetExcludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetExcludeVolumes"></a>

```java
public void resetExcludeVolumes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeVolumes` <a name="resetIncludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetIncludeVolumes"></a>

```java
public void resetIncludeVolumes()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetProtectStatus"></a>

```java
public void resetProtectStatus()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput">backupCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput">backupSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput">excludeVolumesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput">includeVolumesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount">backupCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize">backupSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes">excludeVolumes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes">includeVolumes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus">protectStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupCountInput`<sup>Optional</sup> <a name="backupCountInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCountInput"></a>

```java
public java.lang.Number getBackupCountInput();
```

- *Type:* java.lang.Number

---

##### `backupSizeInput`<sup>Optional</sup> <a name="backupSizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSizeInput"></a>

```java
public java.lang.Number getBackupSizeInput();
```

- *Type:* java.lang.Number

---

##### `excludeVolumesInput`<sup>Optional</sup> <a name="excludeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeVolumesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeVolumesInput`<sup>Optional</sup> <a name="includeVolumesInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeVolumesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatusInput"></a>

```java
public java.lang.String getProtectStatusInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupCount"></a>

```java
public java.lang.Number getBackupCount();
```

- *Type:* java.lang.Number

---

##### `backupSize`<sup>Required</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.backupSize"></a>

```java
public java.lang.Number getBackupSize();
```

- *Type:* java.lang.Number

---

##### `excludeVolumes`<sup>Required</sup> <a name="excludeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.excludeVolumes"></a>

```java
public java.util.List<java.lang.String> getExcludeVolumes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeVolumes`<sup>Required</sup> <a name="includeVolumes" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.includeVolumes"></a>

```java
public java.util.List<java.lang.String> getIncludeVolumes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.protectStatus"></a>

```java
public java.lang.String getProtectStatus();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3ResourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cbrVaultV3.CbrVaultV3Resource">CbrVaultV3Resource</a>

---




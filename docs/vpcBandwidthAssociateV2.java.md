# `opentelekomcloud_vpc_bandwidth_associate_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpc_bandwidth_associate_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2).

# `vpcBandwidthAssociateV2` Submodule <a name="`vpcBandwidthAssociateV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBandwidthAssociateV2 <a name="VpcBandwidthAssociateV2" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2 opentelekomcloud_vpc_bandwidth_associate_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_bandwidth_associate_v2.VpcBandwidthAssociateV2;

VpcBandwidthAssociateV2.Builder.create(Construct scope, java.lang.String id)
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
    .bandwidth(java.lang.String)
    .floatingIps(java.util.List<java.lang.String>)
//  .backupChargeMode(java.lang.String)
//  .backupSize(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.floatingIps">floatingIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.backupChargeMode">backupChargeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.backupSize">backupSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}.

---

##### `floatingIps`<sup>Required</sup> <a name="floatingIps" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.floatingIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}.

---

##### `backupChargeMode`<sup>Optional</sup> <a name="backupChargeMode" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.backupChargeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}.

---

##### `backupSize`<sup>Optional</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.backupSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetBackupChargeMode">resetBackupChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetBackupSize">resetBackupSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackupChargeMode` <a name="resetBackupChargeMode" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetBackupChargeMode"></a>

```java
public void resetBackupChargeMode()
```

##### `resetBackupSize` <a name="resetBackupSize" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetBackupSize"></a>

```java
public void resetBackupSize()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_bandwidth_associate_v2.VpcBandwidthAssociateV2;

VpcBandwidthAssociateV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_bandwidth_associate_v2.VpcBandwidthAssociateV2;

VpcBandwidthAssociateV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_bandwidth_associate_v2.VpcBandwidthAssociateV2;

VpcBandwidthAssociateV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupChargeModeInput">backupChargeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupSizeInput">backupSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.floatingIpsInput">floatingIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupChargeMode">backupChargeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupSize">backupSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.floatingIps">floatingIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupChargeModeInput`<sup>Optional</sup> <a name="backupChargeModeInput" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupChargeModeInput"></a>

```java
public java.lang.String getBackupChargeModeInput();
```

- *Type:* java.lang.String

---

##### `backupSizeInput`<sup>Optional</sup> <a name="backupSizeInput" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupSizeInput"></a>

```java
public java.lang.Number getBackupSizeInput();
```

- *Type:* java.lang.Number

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.bandwidthInput"></a>

```java
public java.lang.String getBandwidthInput();
```

- *Type:* java.lang.String

---

##### `floatingIpsInput`<sup>Optional</sup> <a name="floatingIpsInput" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.floatingIpsInput"></a>

```java
public java.util.List<java.lang.String> getFloatingIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `backupChargeMode`<sup>Required</sup> <a name="backupChargeMode" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupChargeMode"></a>

```java
public java.lang.String getBackupChargeMode();
```

- *Type:* java.lang.String

---

##### `backupSize`<sup>Required</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.backupSize"></a>

```java
public java.lang.Number getBackupSize();
```

- *Type:* java.lang.Number

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `floatingIps`<sup>Required</sup> <a name="floatingIps" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.floatingIps"></a>

```java
public java.util.List<java.lang.String> getFloatingIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcBandwidthAssociateV2Config <a name="VpcBandwidthAssociateV2Config" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_bandwidth_associate_v2.VpcBandwidthAssociateV2Config;

VpcBandwidthAssociateV2Config.builder()
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
    .bandwidth(java.lang.String)
    .floatingIps(java.util.List<java.lang.String>)
//  .backupChargeMode(java.lang.String)
//  .backupSize(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.floatingIps">floatingIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.backupChargeMode">backupChargeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.backupSize">backupSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}.

---

##### `floatingIps`<sup>Required</sup> <a name="floatingIps" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.floatingIps"></a>

```java
public java.util.List<java.lang.String> getFloatingIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}.

---

##### `backupChargeMode`<sup>Optional</sup> <a name="backupChargeMode" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.backupChargeMode"></a>

```java
public java.lang.String getBackupChargeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}.

---

##### `backupSize`<sup>Optional</sup> <a name="backupSize" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.backupSize"></a>

```java
public java.lang.Number getBackupSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcBandwidthAssociateV2.VpcBandwidthAssociateV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




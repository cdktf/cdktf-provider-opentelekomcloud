# `dmsDedicatedInstanceV2` Submodule <a name="`dmsDedicatedInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDedicatedInstanceV2 <a name="DmsDedicatedInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2 opentelekomcloud_dms_dedicated_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2;

DmsDedicatedInstanceV2.Builder.create(Construct scope, java.lang.String id)
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
    .brokerNum(java.lang.Number)
    .engineVersion(java.lang.String)
    .flavorId(java.lang.String)
    .name(java.lang.String)
    .networkId(java.lang.String)
    .securityGroupId(java.lang.String)
    .storageSpace(java.lang.Number)
    .storageSpecCode(java.lang.String)
    .vpcId(java.lang.String)
//  .accessUser(java.lang.String)
//  .archType(java.lang.String)
//  .availableZones(java.util.List<java.lang.String>)
//  .crossVpcAccesses(IResolvable)
//  .crossVpcAccesses(java.util.List<DmsDedicatedInstanceV2CrossVpcAccesses>)
//  .description(java.lang.String)
//  .diskEncryptedEnable(java.lang.Boolean)
//  .diskEncryptedEnable(IResolvable)
//  .diskEncryptedKey(java.lang.String)
//  .enabledMechanisms(java.util.List<java.lang.String>)
//  .enablePublicip(java.lang.Boolean)
//  .enablePublicip(IResolvable)
//  .id(java.lang.String)
//  .ipv6Enable(java.lang.Boolean)
//  .ipv6Enable(IResolvable)
//  .maintainBegin(java.lang.String)
//  .maintainEnd(java.lang.String)
//  .newTenantIps(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .publicipId(java.util.List<java.lang.String>)
//  .retentionPolicy(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sslEnable(java.lang.Boolean)
//  .sslEnable(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsDedicatedInstanceV2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.brokerNum">brokerNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.storageSpace">storageSpace</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.storageSpecCode">storageSpecCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.accessUser">accessUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.crossVpcAccesses">crossVpcAccesses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>></code> | cross_vpc_accesses block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.diskEncryptedEnable">diskEncryptedEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.diskEncryptedKey">diskEncryptedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.enabledMechanisms">enabledMechanisms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.enablePublicip">enablePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.newTenantIps">newTenantIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.publicipId">publicipId</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerNum`<sup>Required</sup> <a name="brokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.brokerNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}.

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.flavorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.networkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}.

---

##### `storageSpace`<sup>Required</sup> <a name="storageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.storageSpace"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}.

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.storageSpecCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}.

---

##### `accessUser`<sup>Optional</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.accessUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.archType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}.

---

##### `availableZones`<sup>Optional</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.availableZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}.

---

##### `crossVpcAccesses`<sup>Optional</sup> <a name="crossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.crossVpcAccesses"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>>

cross_vpc_accesses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#cross_vpc_accesses DmsDedicatedInstanceV2#cross_vpc_accesses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}.

---

##### `diskEncryptedEnable`<sup>Optional</sup> <a name="diskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.diskEncryptedEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}.

---

##### `diskEncryptedKey`<sup>Optional</sup> <a name="diskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.diskEncryptedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}.

---

##### `enabledMechanisms`<sup>Optional</sup> <a name="enabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.enabledMechanisms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}.

---

##### `enablePublicip`<sup>Optional</sup> <a name="enablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.enablePublicip"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6Enable`<sup>Optional</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.ipv6Enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.maintainBegin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.maintainEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}.

---

##### `newTenantIps`<sup>Optional</sup> <a name="newTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.newTenantIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}.

---

##### `publicipId`<sup>Optional</sup> <a name="publicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.publicipId"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.retentionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.securityProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}.

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.sslEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#timeouts DmsDedicatedInstanceV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses">putCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser">resetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones">resetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses">resetCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable">resetDiskEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey">resetDiskEncryptedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms">resetEnabledMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip">resetEnablePublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable">resetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin">resetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd">resetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps">resetNewTenantIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId">resetPublicipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable">resetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCrossVpcAccesses` <a name="putCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses"></a>

```java
public void putCrossVpcAccesses(IResolvable OR java.util.List<DmsDedicatedInstanceV2CrossVpcAccesses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts"></a>

```java
public void putTimeouts(DmsDedicatedInstanceV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

---

##### `resetAccessUser` <a name="resetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser"></a>

```java
public void resetAccessUser()
```

##### `resetArchType` <a name="resetArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType"></a>

```java
public void resetArchType()
```

##### `resetAvailableZones` <a name="resetAvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones"></a>

```java
public void resetAvailableZones()
```

##### `resetCrossVpcAccesses` <a name="resetCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses"></a>

```java
public void resetCrossVpcAccesses()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskEncryptedEnable` <a name="resetDiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable"></a>

```java
public void resetDiskEncryptedEnable()
```

##### `resetDiskEncryptedKey` <a name="resetDiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey"></a>

```java
public void resetDiskEncryptedKey()
```

##### `resetEnabledMechanisms` <a name="resetEnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms"></a>

```java
public void resetEnabledMechanisms()
```

##### `resetEnablePublicip` <a name="resetEnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip"></a>

```java
public void resetEnablePublicip()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6Enable` <a name="resetIpv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable"></a>

```java
public void resetIpv6Enable()
```

##### `resetMaintainBegin` <a name="resetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin"></a>

```java
public void resetMaintainBegin()
```

##### `resetMaintainEnd` <a name="resetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd"></a>

```java
public void resetMaintainEnd()
```

##### `resetNewTenantIps` <a name="resetNewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps"></a>

```java
public void resetNewTenantIps()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPublicipId` <a name="resetPublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId"></a>

```java
public void resetPublicipId()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSslEnable` <a name="resetSslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable"></a>

```java
public void resetSslEnable()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2;

DmsDedicatedInstanceV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2;

DmsDedicatedInstanceV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2;

DmsDedicatedInstanceV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2;

DmsDedicatedInstanceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsDedicatedInstanceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsDedicatedInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsDedicatedInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsDedicatedInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced">certReplaced</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress">connectAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum">connectorNodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses">crossVpcAccesses</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping">dumping</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum">nodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum">partitionNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress">podConnectAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth">publicBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode">resourceSpecCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable">sslTwoWayEnable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId">storageResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace">usedStorageSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput">accessUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput">archTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput">availableZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput">brokerNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput">crossVpcAccessesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput">diskEncryptedEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput">diskEncryptedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput">enabledMechanismsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput">enablePublicipInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput">flavorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput">ipv6EnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput">maintainBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput">maintainEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput">newTenantIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput">publicipIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput">sslEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput">storageSpaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput">storageSpecCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser">accessUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum">brokerNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable">diskEncryptedEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey">diskEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms">enabledMechanisms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip">enablePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps">newTenantIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId">publicipId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy">retentionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace">storageSpace</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode">storageSpecCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `certReplaced`<sup>Required</sup> <a name="certReplaced" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced"></a>

```java
public IResolvable getCertReplaced();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `connectAddress`<sup>Required</sup> <a name="connectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress"></a>

```java
public java.lang.String getConnectAddress();
```

- *Type:* java.lang.String

---

##### `connectorNodeNum`<sup>Required</sup> <a name="connectorNodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum"></a>

```java
public java.lang.Number getConnectorNodeNum();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `crossVpcAccesses`<sup>Required</sup> <a name="crossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses"></a>

```java
public DmsDedicatedInstanceV2CrossVpcAccessesList getCrossVpcAccesses();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a>

---

##### `dumping`<sup>Required</sup> <a name="dumping" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping"></a>

```java
public IResolvable getDumping();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum"></a>

```java
public java.lang.Number getNodeNum();
```

- *Type:* java.lang.Number

---

##### `partitionNum`<sup>Required</sup> <a name="partitionNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum"></a>

```java
public java.lang.Number getPartitionNum();
```

- *Type:* java.lang.Number

---

##### `podConnectAddress`<sup>Required</sup> <a name="podConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress"></a>

```java
public java.lang.String getPodConnectAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publicBandwidth`<sup>Required</sup> <a name="publicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth"></a>

```java
public java.lang.Number getPublicBandwidth();
```

- *Type:* java.lang.Number

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceSpecCode`<sup>Required</sup> <a name="resourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode"></a>

```java
public java.lang.String getResourceSpecCode();
```

- *Type:* java.lang.String

---

##### `sslTwoWayEnable`<sup>Required</sup> <a name="sslTwoWayEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable"></a>

```java
public IResolvable getSslTwoWayEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageResourceId`<sup>Required</sup> <a name="storageResourceId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId"></a>

```java
public java.lang.String getStorageResourceId();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts"></a>

```java
public DmsDedicatedInstanceV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usedStorageSpace`<sup>Required</sup> <a name="usedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace"></a>

```java
public java.lang.Number getUsedStorageSpace();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `accessUserInput`<sup>Optional</sup> <a name="accessUserInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput"></a>

```java
public java.lang.String getAccessUserInput();
```

- *Type:* java.lang.String

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput"></a>

```java
public java.lang.String getArchTypeInput();
```

- *Type:* java.lang.String

---

##### `availableZonesInput`<sup>Optional</sup> <a name="availableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailableZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `brokerNumInput`<sup>Optional</sup> <a name="brokerNumInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput"></a>

```java
public java.lang.Number getBrokerNumInput();
```

- *Type:* java.lang.Number

---

##### `crossVpcAccessesInput`<sup>Optional</sup> <a name="crossVpcAccessesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput"></a>

```java
public java.lang.Object getCrossVpcAccessesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptedEnableInput`<sup>Optional</sup> <a name="diskEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput"></a>

```java
public java.lang.Object getDiskEncryptedEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskEncryptedKeyInput`<sup>Optional</sup> <a name="diskEncryptedKeyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput"></a>

```java
public java.lang.String getDiskEncryptedKeyInput();
```

- *Type:* java.lang.String

---

##### `enabledMechanismsInput`<sup>Optional</sup> <a name="enabledMechanismsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledMechanismsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePublicipInput`<sup>Optional</sup> <a name="enablePublicipInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput"></a>

```java
public java.lang.Object getEnablePublicipInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput"></a>

```java
public java.lang.String getFlavorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6EnableInput`<sup>Optional</sup> <a name="ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput"></a>

```java
public java.lang.Object getIpv6EnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintainBeginInput`<sup>Optional</sup> <a name="maintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput"></a>

```java
public java.lang.String getMaintainBeginInput();
```

- *Type:* java.lang.String

---

##### `maintainEndInput`<sup>Optional</sup> <a name="maintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput"></a>

```java
public java.lang.String getMaintainEndInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `newTenantIpsInput`<sup>Optional</sup> <a name="newTenantIpsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput"></a>

```java
public java.util.List<java.lang.String> getNewTenantIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `publicipIdInput`<sup>Optional</sup> <a name="publicipIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput"></a>

```java
public java.util.List<java.lang.String> getPublicipIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput"></a>

```java
public java.lang.String getRetentionPolicyInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslEnableInput`<sup>Optional</sup> <a name="sslEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput"></a>

```java
public java.lang.Object getSslEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageSpaceInput`<sup>Optional</sup> <a name="storageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput"></a>

```java
public java.lang.Number getStorageSpaceInput();
```

- *Type:* java.lang.Number

---

##### `storageSpecCodeInput`<sup>Optional</sup> <a name="storageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput"></a>

```java
public java.lang.String getStorageSpecCodeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `accessUser`<sup>Required</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser"></a>

```java
public java.lang.String getAccessUser();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `brokerNum`<sup>Required</sup> <a name="brokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum"></a>

```java
public java.lang.Number getBrokerNum();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskEncryptedEnable`<sup>Required</sup> <a name="diskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable"></a>

```java
public java.lang.Object getDiskEncryptedEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diskEncryptedKey`<sup>Required</sup> <a name="diskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey"></a>

```java
public java.lang.String getDiskEncryptedKey();
```

- *Type:* java.lang.String

---

##### `enabledMechanisms`<sup>Required</sup> <a name="enabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms"></a>

```java
public java.util.List<java.lang.String> getEnabledMechanisms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enablePublicip`<sup>Required</sup> <a name="enablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip"></a>

```java
public java.lang.Object getEnablePublicip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6Enable`<sup>Required</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable"></a>

```java
public java.lang.Object getIpv6Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintainBegin`<sup>Required</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

---

##### `maintainEnd`<sup>Required</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd"></a>

```java
public java.lang.String getMaintainEnd();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `newTenantIps`<sup>Required</sup> <a name="newTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps"></a>

```java
public java.util.List<java.lang.String> getNewTenantIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `publicipId`<sup>Required</sup> <a name="publicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId"></a>

```java
public java.util.List<java.lang.String> getPublicipId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy"></a>

```java
public java.lang.String getRetentionPolicy();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable"></a>

```java
public java.lang.Object getSslEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageSpace`<sup>Required</sup> <a name="storageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace"></a>

```java
public java.lang.Number getStorageSpace();
```

- *Type:* java.lang.Number

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode"></a>

```java
public java.lang.String getStorageSpecCode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDedicatedInstanceV2Config <a name="DmsDedicatedInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2Config;

DmsDedicatedInstanceV2Config.builder()
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
    .brokerNum(java.lang.Number)
    .engineVersion(java.lang.String)
    .flavorId(java.lang.String)
    .name(java.lang.String)
    .networkId(java.lang.String)
    .securityGroupId(java.lang.String)
    .storageSpace(java.lang.Number)
    .storageSpecCode(java.lang.String)
    .vpcId(java.lang.String)
//  .accessUser(java.lang.String)
//  .archType(java.lang.String)
//  .availableZones(java.util.List<java.lang.String>)
//  .crossVpcAccesses(IResolvable)
//  .crossVpcAccesses(java.util.List<DmsDedicatedInstanceV2CrossVpcAccesses>)
//  .description(java.lang.String)
//  .diskEncryptedEnable(java.lang.Boolean)
//  .diskEncryptedEnable(IResolvable)
//  .diskEncryptedKey(java.lang.String)
//  .enabledMechanisms(java.util.List<java.lang.String>)
//  .enablePublicip(java.lang.Boolean)
//  .enablePublicip(IResolvable)
//  .id(java.lang.String)
//  .ipv6Enable(java.lang.Boolean)
//  .ipv6Enable(IResolvable)
//  .maintainBegin(java.lang.String)
//  .maintainEnd(java.lang.String)
//  .newTenantIps(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .publicipId(java.util.List<java.lang.String>)
//  .retentionPolicy(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sslEnable(java.lang.Boolean)
//  .sslEnable(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsDedicatedInstanceV2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum">brokerNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace">storageSpace</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode">storageSpecCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser">accessUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses">crossVpcAccesses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>></code> | cross_vpc_accesses block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable">diskEncryptedEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey">diskEncryptedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms">enabledMechanisms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip">enablePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps">newTenantIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId">publicipId</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy">retentionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brokerNum`<sup>Required</sup> <a name="brokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum"></a>

```java
public java.lang.Number getBrokerNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}.

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}.

---

##### `storageSpace`<sup>Required</sup> <a name="storageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace"></a>

```java
public java.lang.Number getStorageSpace();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}.

---

##### `storageSpecCode`<sup>Required</sup> <a name="storageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode"></a>

```java
public java.lang.String getStorageSpecCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}.

---

##### `accessUser`<sup>Optional</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser"></a>

```java
public java.lang.String getAccessUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}.

---

##### `availableZones`<sup>Optional</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}.

---

##### `crossVpcAccesses`<sup>Optional</sup> <a name="crossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses"></a>

```java
public java.lang.Object getCrossVpcAccesses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>>

cross_vpc_accesses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#cross_vpc_accesses DmsDedicatedInstanceV2#cross_vpc_accesses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}.

---

##### `diskEncryptedEnable`<sup>Optional</sup> <a name="diskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable"></a>

```java
public java.lang.Object getDiskEncryptedEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}.

---

##### `diskEncryptedKey`<sup>Optional</sup> <a name="diskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey"></a>

```java
public java.lang.String getDiskEncryptedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}.

---

##### `enabledMechanisms`<sup>Optional</sup> <a name="enabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms"></a>

```java
public java.util.List<java.lang.String> getEnabledMechanisms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}.

---

##### `enablePublicip`<sup>Optional</sup> <a name="enablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip"></a>

```java
public java.lang.Object getEnablePublicip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6Enable`<sup>Optional</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable"></a>

```java
public java.lang.Object getIpv6Enable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd"></a>

```java
public java.lang.String getMaintainEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}.

---

##### `newTenantIps`<sup>Optional</sup> <a name="newTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps"></a>

```java
public java.util.List<java.lang.String> getNewTenantIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}.

---

##### `publicipId`<sup>Optional</sup> <a name="publicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId"></a>

```java
public java.util.List<java.lang.String> getPublicipId();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy"></a>

```java
public java.lang.String getRetentionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}.

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable"></a>

```java
public java.lang.Object getSslEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts"></a>

```java
public DmsDedicatedInstanceV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#timeouts DmsDedicatedInstanceV2#timeouts}

---

### DmsDedicatedInstanceV2CrossVpcAccesses <a name="DmsDedicatedInstanceV2CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2CrossVpcAccesses;

DmsDedicatedInstanceV2CrossVpcAccesses.builder()
//  .advertisedIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp">advertisedIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}. |

---

##### `advertisedIp`<sup>Optional</sup> <a name="advertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp"></a>

```java
public java.lang.String getAdvertisedIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}.

---

### DmsDedicatedInstanceV2Timeouts <a name="DmsDedicatedInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2Timeouts;

DmsDedicatedInstanceV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDedicatedInstanceV2CrossVpcAccessesList <a name="DmsDedicatedInstanceV2CrossVpcAccessesList" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2CrossVpcAccessesList;

new DmsDedicatedInstanceV2CrossVpcAccessesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get"></a>

```java
public DmsDedicatedInstanceV2CrossVpcAccessesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>>

---


### DmsDedicatedInstanceV2CrossVpcAccessesOutputReference <a name="DmsDedicatedInstanceV2CrossVpcAccessesOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference;

new DmsDedicatedInstanceV2CrossVpcAccessesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp">resetAdvertisedIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertisedIp` <a name="resetAdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp"></a>

```java
public void resetAdvertisedIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp">listenerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId">portId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput">advertisedIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp">advertisedIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listenerIp`<sup>Required</sup> <a name="listenerIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp"></a>

```java
public java.lang.String getListenerIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId"></a>

```java
public java.lang.String getPortId();
```

- *Type:* java.lang.String

---

##### `advertisedIpInput`<sup>Optional</sup> <a name="advertisedIpInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput"></a>

```java
public java.lang.String getAdvertisedIpInput();
```

- *Type:* java.lang.String

---

##### `advertisedIp`<sup>Required</sup> <a name="advertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp"></a>

```java
public java.lang.String getAdvertisedIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses">DmsDedicatedInstanceV2CrossVpcAccesses</a>

---


### DmsDedicatedInstanceV2TimeoutsOutputReference <a name="DmsDedicatedInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_dedicated_instance_v2.DmsDedicatedInstanceV2TimeoutsOutputReference;

new DmsDedicatedInstanceV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

---




# `opentelekomcloud_vpc_subnet_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vpc_subnet_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1).

# `vpcSubnetV1` Submodule <a name="`vpcSubnetV1` Submodule" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSubnetV1 <a name="VpcSubnetV1" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1;

VpcSubnetV1.Builder.create(Construct scope, java.lang.String id)
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
    .cidr(java.lang.String)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .description(java.lang.String)
//  .dhcpEnable(java.lang.Boolean)
//  .dhcpEnable(IResolvable)
//  .dnsList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ntpAddresses(java.lang.String)
//  .primaryDns(java.lang.String)
//  .region(java.lang.String)
//  .secondaryDns(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcSubnetV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dhcpEnable">dhcpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dnsList">dnsList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.ntpAddresses">ntpAddresses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.primaryDns">primaryDns</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.secondaryDns">secondaryDns</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}.

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.gatewayIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}.

---

##### `dhcpEnable`<sup>Optional</sup> <a name="dhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dhcpEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}.

---

##### `dnsList`<sup>Optional</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.dnsList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntpAddresses`<sup>Optional</sup> <a name="ntpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.ntpAddresses"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}.

---

##### `primaryDns`<sup>Optional</sup> <a name="primaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.primaryDns"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}.

---

##### `secondaryDns`<sup>Optional</sup> <a name="secondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.secondaryDns"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#timeouts VpcSubnetV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDhcpEnable">resetDhcpEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDnsList">resetDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetNtpAddresses">resetNtpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetPrimaryDns">resetPrimaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetSecondaryDns">resetSecondaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts"></a>

```java
public void putTimeouts(VpcSubnetV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDhcpEnable` <a name="resetDhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDhcpEnable"></a>

```java
public void resetDhcpEnable()
```

##### `resetDnsList` <a name="resetDnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetDnsList"></a>

```java
public void resetDnsList()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetId"></a>

```java
public void resetId()
```

##### `resetNtpAddresses` <a name="resetNtpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetNtpAddresses"></a>

```java
public void resetNtpAddresses()
```

##### `resetPrimaryDns` <a name="resetPrimaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetPrimaryDns"></a>

```java
public void resetPrimaryDns()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecondaryDns` <a name="resetSecondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetSecondaryDns"></a>

```java
public void resetSecondaryDns()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1;

VpcSubnetV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1;

VpcSubnetV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1;

VpcSubnetV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference">VpcSubnetV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnableInput">dhcpEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsListInput">dnsListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpInput">gatewayIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddressesInput">ntpAddressesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDnsInput">primaryDnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDnsInput">secondaryDnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnable">dhcpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsList">dnsList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddresses">ntpAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDns">primaryDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDns">secondaryDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeouts"></a>

```java
public VpcSubnetV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference">VpcSubnetV1TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dhcpEnableInput`<sup>Optional</sup> <a name="dhcpEnableInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnableInput"></a>

```java
public java.lang.Object getDhcpEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsListInput`<sup>Optional</sup> <a name="dnsListInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsListInput"></a>

```java
public java.util.List<java.lang.String> getDnsListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIpInput"></a>

```java
public java.lang.String getGatewayIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ntpAddressesInput`<sup>Optional</sup> <a name="ntpAddressesInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddressesInput"></a>

```java
public java.lang.String getNtpAddressesInput();
```

- *Type:* java.lang.String

---

##### `primaryDnsInput`<sup>Optional</sup> <a name="primaryDnsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDnsInput"></a>

```java
public java.lang.String getPrimaryDnsInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secondaryDnsInput`<sup>Optional</sup> <a name="secondaryDnsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDnsInput"></a>

```java
public java.lang.String getSecondaryDnsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dhcpEnable`<sup>Required</sup> <a name="dhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dhcpEnable"></a>

```java
public java.lang.Object getDhcpEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsList`<sup>Required</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.dnsList"></a>

```java
public java.util.List<java.lang.String> getDnsList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ntpAddresses`<sup>Required</sup> <a name="ntpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.ntpAddresses"></a>

```java
public java.lang.String getNtpAddresses();
```

- *Type:* java.lang.String

---

##### `primaryDns`<sup>Required</sup> <a name="primaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.primaryDns"></a>

```java
public java.lang.String getPrimaryDns();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secondaryDns`<sup>Required</sup> <a name="secondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.secondaryDns"></a>

```java
public java.lang.String getSecondaryDns();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSubnetV1Config <a name="VpcSubnetV1Config" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1Config;

VpcSubnetV1Config.builder()
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
    .cidr(java.lang.String)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .description(java.lang.String)
//  .dhcpEnable(java.lang.Boolean)
//  .dhcpEnable(IResolvable)
//  .dnsList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ntpAddresses(java.lang.String)
//  .primaryDns(java.lang.String)
//  .region(java.lang.String)
//  .secondaryDns(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpcSubnetV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dhcpEnable">dhcpEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dnsList">dnsList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ntpAddresses">ntpAddresses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.primaryDns">primaryDns</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.secondaryDns">secondaryDns</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#cidr VpcSubnetV1#cidr}.

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#gateway_ip VpcSubnetV1#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#name VpcSubnetV1#name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#vpc_id VpcSubnetV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#availability_zone VpcSubnetV1#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#description VpcSubnetV1#description}.

---

##### `dhcpEnable`<sup>Optional</sup> <a name="dhcpEnable" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dhcpEnable"></a>

```java
public java.lang.Object getDhcpEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dhcp_enable VpcSubnetV1#dhcp_enable}.

---

##### `dnsList`<sup>Optional</sup> <a name="dnsList" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.dnsList"></a>

```java
public java.util.List<java.lang.String> getDnsList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#dns_list VpcSubnetV1#dns_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#id VpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ntpAddresses`<sup>Optional</sup> <a name="ntpAddresses" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.ntpAddresses"></a>

```java
public java.lang.String getNtpAddresses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#ntp_addresses VpcSubnetV1#ntp_addresses}.

---

##### `primaryDns`<sup>Optional</sup> <a name="primaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.primaryDns"></a>

```java
public java.lang.String getPrimaryDns();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#primary_dns VpcSubnetV1#primary_dns}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#region VpcSubnetV1#region}.

---

##### `secondaryDns`<sup>Optional</sup> <a name="secondaryDns" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.secondaryDns"></a>

```java
public java.lang.String getSecondaryDns();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#secondary_dns VpcSubnetV1#secondary_dns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#tags VpcSubnetV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Config.property.timeouts"></a>

```java
public VpcSubnetV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#timeouts VpcSubnetV1#timeouts}

---

### VpcSubnetV1Timeouts <a name="VpcSubnetV1Timeouts" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1Timeouts;

VpcSubnetV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#create VpcSubnetV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#delete VpcSubnetV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#create VpcSubnetV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/vpc_subnet_v1#delete VpcSubnetV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSubnetV1TimeoutsOutputReference <a name="VpcSubnetV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vpc_subnet_v1.VpcSubnetV1TimeoutsOutputReference;

new VpcSubnetV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcSubnetV1.VpcSubnetV1Timeouts">VpcSubnetV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---




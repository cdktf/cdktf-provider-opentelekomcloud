# `dataOpentelekomcloudNatDnatRulesV2` Submodule <a name="`dataOpentelekomcloudNatDnatRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatDnatRulesV2 <a name="DataOpentelekomcloudNatDnatRulesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2 opentelekomcloud_nat_dnat_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.NewDataOpentelekomcloudNatDnatRulesV2(scope Construct, id *string, config DataOpentelekomcloudNatDnatRulesV2Config) DataOpentelekomcloudNatDnatRulesV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config">DataOpentelekomcloudNatDnatRulesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config">DataOpentelekomcloudNatDnatRulesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetExternalServicePort">ResetExternalServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpAddress">ResetFloatingIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpId">ResetFloatingIpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetInternalServicePort">ResetInternalServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPortId">ResetPortId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalServicePort` <a name="ResetExternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetExternalServicePort"></a>

```go
func ResetExternalServicePort()
```

##### `ResetFloatingIpAddress` <a name="ResetFloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpAddress"></a>

```go
func ResetFloatingIpAddress()
```

##### `ResetFloatingIpId` <a name="ResetFloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpId"></a>

```go
func ResetFloatingIpId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetGatewayId"></a>

```go
func ResetGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetId"></a>

```go
func ResetId()
```

##### `ResetInternalServicePort` <a name="ResetInternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetInternalServicePort"></a>

```go
func ResetInternalServicePort()
```

##### `ResetPortId` <a name="ResetPortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPortId"></a>

```go
func ResetPortId()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatDnatRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudNatDnatRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudNatDnatRulesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudNatDnatRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatDnatRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList">DataOpentelekomcloudNatDnatRulesV2RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePortInput">ExternalServicePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddressInput">FloatingIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpIdInput">FloatingIpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePortInput">InternalServicePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portIdInput">PortIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePort">ExternalServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePort">InternalServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portId">PortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.rules"></a>

```go
func Rules() DataOpentelekomcloudNatDnatRulesV2RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList">DataOpentelekomcloudNatDnatRulesV2RulesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalServicePortInput`<sup>Optional</sup> <a name="ExternalServicePortInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePortInput"></a>

```go
func ExternalServicePortInput() *f64
```

- *Type:* *f64

---

##### `FloatingIpAddressInput`<sup>Optional</sup> <a name="FloatingIpAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddressInput"></a>

```go
func FloatingIpAddressInput() *string
```

- *Type:* *string

---

##### `FloatingIpIdInput`<sup>Optional</sup> <a name="FloatingIpIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpIdInput"></a>

```go
func FloatingIpIdInput() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalServicePortInput`<sup>Optional</sup> <a name="InternalServicePortInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePortInput"></a>

```go
func InternalServicePortInput() *f64
```

- *Type:* *f64

---

##### `PortIdInput`<sup>Optional</sup> <a name="PortIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portIdInput"></a>

```go
func PortIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalServicePort`<sup>Required</sup> <a name="ExternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePort"></a>

```go
func ExternalServicePort() *f64
```

- *Type:* *f64

---

##### `FloatingIpAddress`<sup>Required</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddress"></a>

```go
func FloatingIpAddress() *string
```

- *Type:* *string

---

##### `FloatingIpId`<sup>Required</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpId"></a>

```go
func FloatingIpId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalServicePort`<sup>Required</sup> <a name="InternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePort"></a>

```go
func InternalServicePort() *f64
```

- *Type:* *f64

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portId"></a>

```go
func PortId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatDnatRulesV2Config <a name="DataOpentelekomcloudNatDnatRulesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

&dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	ExternalServicePort: *f64,
	FloatingIpAddress: *string,
	FloatingIpId: *string,
	GatewayId: *string,
	Id: *string,
	InternalServicePort: *f64,
	PortId: *string,
	PrivateIp: *string,
	Protocol: *string,
	RuleId: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.externalServicePort">ExternalServicePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.internalServicePort">InternalServicePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.portId">PortId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}.

---

##### `ExternalServicePort`<sup>Optional</sup> <a name="ExternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.externalServicePort"></a>

```go
ExternalServicePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}.

---

##### `FloatingIpAddress`<sup>Optional</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpAddress"></a>

```go
FloatingIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}.

---

##### `FloatingIpId`<sup>Optional</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpId"></a>

```go
FloatingIpId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalServicePort`<sup>Optional</sup> <a name="InternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.internalServicePort"></a>

```go
InternalServicePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}.

---

##### `PortId`<sup>Optional</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.portId"></a>

```go
PortId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}.

---

### DataOpentelekomcloudNatDnatRulesV2Rules <a name="DataOpentelekomcloudNatDnatRulesV2Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

&dataopentelekomcloudnatdnatrulesv2.DataOpentelekomcloudNatDnatRulesV2Rules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudNatDnatRulesV2RulesList <a name="DataOpentelekomcloudNatDnatRulesV2RulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.NewDataOpentelekomcloudNatDnatRulesV2RulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudNatDnatRulesV2RulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudNatDnatRulesV2RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudNatDnatRulesV2RulesOutputReference <a name="DataOpentelekomcloudNatDnatRulesV2RulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatdnatrulesv2"

dataopentelekomcloudnatdnatrulesv2.NewDataOpentelekomcloudNatDnatRulesV2RulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudNatDnatRulesV2RulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.externalServicePort">ExternalServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalServicePort">InternalServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.portId">PortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules">DataOpentelekomcloudNatDnatRulesV2Rules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalServicePort`<sup>Required</sup> <a name="ExternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.externalServicePort"></a>

```go
func ExternalServicePort() *f64
```

- *Type:* *f64

---

##### `FloatingIpAddress`<sup>Required</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpAddress"></a>

```go
func FloatingIpAddress() *string
```

- *Type:* *string

---

##### `FloatingIpId`<sup>Required</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpId"></a>

```go
func FloatingIpId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalServicePort`<sup>Required</sup> <a name="InternalServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalServicePort"></a>

```go
func InternalServicePort() *f64
```

- *Type:* *f64

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.portId"></a>

```go
func PortId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudNatDnatRulesV2Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules">DataOpentelekomcloudNatDnatRulesV2Rules</a>

---



